---
title: Managing Pods using ReplicaSet
image: '/labs/images/replicaset_header.png'
description: 'Learn how to manage Pods using ReplicaSet in Kubernetes'
author: André Lucas
date: Fri Aug 16 2024
tags: [Kubernetes, ReplicaSet, k8s, DevOps]
published: true
---

::blog-post
---
date: Fri Aug 16 2024
tags: [Kubernetes, ReplicaSet, k8s, DevOps]
---
# Managing Pods using ReplicaSet

![ReplicaSet Header](/labs/images/replicaset_header.png)

To follow this article you can get the files on - [https://github.com/ProgrammingOnMars/kubernetes-for-dev](https://github.com/ProgrammingOnMars/kubernetes-for-dev)

When a pod is created, this pod isn't managing for anything. Thus, a pod can be stopped for any reason, perhaps error application, or network errors. So, we need a mechanism to keep the application available.

When a Pod is stopped for any reason your application will not be available, but you must not want it. You need to a mechanism to restart or create others pods to keep the application available again.

Another reason is when you want to create a loading balancing to distribute the workloads of your application.

## How a ReplicaSet works

The ReplicaSet manages the pod's state, their quantity to ensure loading balancing between nodes, and the minimum pod's quantity.

Let's create a ReplicaSet

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: programmingonmars-replicaset
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
        image: andrelucastic/demo:latest
        ports:
        - containerPort: 8080
```

The number of `replicas` indicates the number of Pods that should be maintaining

The `template` is the data (characteristics) of the new Pods. When a ReplicaSet needs to create a new Pod it uses its template

Let's apply this configuration file in the cluster

```bash
kubectl apply -f 03-managing-pods-using-replica-set/replica-set.yml
```

Now let's see the ReplicaSet created using the command

```bash
kubectl get replicaset
```

![ReplicaSet Output](/labs/images/replicaset_output.png)

Desire - The number of Pods that we declared in the file.

Current - The pods that are running in the cluster and that are being managed by the replica set.

Ready - The pods that are running.

Let's see if the application is working using for now the command:

```bash
kubectl port-forward replicaset/programmingonmars-replicaset 8000:8080
```

And we can see accessing `localhost:8000` using the terminal or the browser.

![Curl Output](/labs/images/curl_output.png)

Let's access the URL

![Updated Curl Output](/labs/images/updated_curl_output.png)

Suppose that we have 10, 100, 1000 pods? Yes, using ReplicaSet we needed to delete these all pods.

But we need to solve it using deployments

We will see in the next post. See you there!

Tags: Microservice, Kubernetes, replicaset, k8s
