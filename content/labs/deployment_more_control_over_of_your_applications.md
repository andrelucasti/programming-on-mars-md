---
title: Deployment - more control over of your applications
image: '/labs/images/deployment_header.png'
description: 'Learn how to use Kubernetes Deployments for better application control'
author: André Lucas
date: Mon Aug 26 2024
tags: [Infrastructure, Deployment, k8s, Containers, DevOps]
published: true
---

::blog-post
---
date: Mon Aug 26 2024
tags: [Infrastructure, Deployment, k8s, Containers, DevOps]
---
# Deployment - more control over of your applications

![Deployment Header](/labs/images/deployment_header.png)

To follow this article you can get the files on - [https://github.com/ProgrammingOnMars/kubernetes-for-dev](https://github.com/ProgrammingOnMars/kubernetes-for-dev)

We saw that ReplicaSet keeps the desired number of pods. But when trying to change the version of the application, it is necessary to remove the pods to force the ReplicaSet to create news pods, and consequently, the pod is created with its new version.

To solve this problem we can use the kind Deployment.

A Deployment provides declarative updates for [Pods](https://programmingonmars.io/post/deployment-more-control-over-of-your-applications) and [ReplicaSets](https://programmingonmars.io/post/deployment-more-control-over-of-your-applications). Retrieved August 26, 2024 from https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

For each update to the image version, the Deployment creates a new ReplicaSet.

You describe a desired state in a Deployment, and the Deployment [Controller](https://programmingonmars.io/post/deployment-more-control-over-of-your-applications) changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments. Retrieved August 26, 2024 from https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

![Deployment Diagram](/labs/images/deployment_diagram.jpeg)

## Hands-on

Let's see how to create a Deployment in the practice:

First, you need to define a Deployment in a YML file, specifying the number of replicas and the container image version to be used.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: programmingonmars-deployment
  labels:
    app: programmingonmars
spec:
  replicas: 3
  selector:
    matchLabels:
      app: programmingonmars
  template:
    metadata:
      labels:
        app: programmingonmars
    spec:
      containers:
      - name: programmingonmars-container
        image: andrelucastic/demo:1.0
        ports:
        - containerPort: 8080
```

Now let's apply in the Kubernetes cluster.

```bash
kubectl apply -f 04-deployment-more-control-over-of-your-applications/deployment.yaml
```

The configuration creates a Deployment named `programmingonmars-deployment` which will maintain three replicas of pods.

```bash
kubectl get pods
```

![Deployment Pods Output](/labs/images/deployment_pods_output.png)

How did you create the pod creation?

The ReplicaSet created by the Deployment

You can check using the command below

```bash
kubectl get replicaset
```

![Deployment ReplicaSet Output](/labs/images/deployment_replicaset_output.png)

Apply the changes

```bash
kubectl apply -f 04-deployment-more-control-over-of-your-applications/deployment.yaml
```

Kubernetes will create a new ReplicaSet for the updated version and perform a rolling update, gradually replacing the old pods with new ones.

We can monitor this progress using the command:

```bash
kubectl rollout status deployment/programmingonmars-deployment
```

If something goes wrong during the update, you can easily roll back to the previous version using:

```bash
kubectl rollout undo deployment/programmingonmars-deployment
```
::
