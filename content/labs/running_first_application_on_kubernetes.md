---
title: Running First Application on Kubernetes
image: '/labs/images/first_application_header.png'
description: 'Learn how to deploy your first application on Kubernetes'
author: André Lucas
date: Mon Aug 12 2024
tags: [Kubernetes, Hands-On, Software Architecture, k8s, DevOps]
published: true
---

::blog-post
---
title: Running First Application on Kubernetes
image: '/labs/images/first_application_header.png'
description: 'Learn how to deploy your first application on Kubernetes'
date: Mon Aug 12 2024
tags: [Kubernetes, Hands-On, Software Architecture, k8s, DevOps]
---
# Running First Application on Kubernetes

![First Application Header](/labs/images/first_application_header.png)

To follow this article you can get the files on - [https://github.com/ProgrammingOnMars/kubernetes-for-dev](https://github.com/ProgrammingOnMars/kubernetes-for-dev)

Now let's see how the smallest deployable units from Kubernetes work called Pod.

Pods are the smallest deployable units of computing that you can create and manage in Kubernetes - Retrieved August 13, 2024 from https://kubernetes.io/docs/concepts/workloads/pods/

Remember that a Pod isn't a container, it wraps a container.

Also, a Pod can have more than one container but the most common use case is "one-container-per-Pod". Thus, Kubernetes manages the pod rather than the containers directly.

An important thing to emphasise is pod is not a container or a process. It is an environment for running container workloads.

A Pod is not a process, but an environment for running container(s). A Pod persists until it is deleted. Retrieved August 13, 2024 from https://kubernetes.io/docs/concepts/workloads/pods/

![Pod Diagram](/labs/images/pod_diagram.jpeg)

We can see the image above, the Pod into a Worker Node and the container into a Pod

From now on, I recommend that you follow and put into practice the same examples as me.

## Creating a Simple Pod

Let's create a `yml` file to represent a pod.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: programmingonmars
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

- **apiVersion**: Kubernetes has an API version. You have to specify the API version you want to communicate.
- **kind**: the type of deployable unit
- **metadata**: This data is used by Kubernetes to manage, identify, and interact with resources like Pods, Services, Deployments.
- **metadata -> name**: this is a unique identifier.
- **metadata -> labels**: These are key-value pairs that are attached to resources and are used for organizing, selecting and querying resources.
- **spec**: this is the Pod specification it contains all desired configurations, and describes how the Pod should look and behave.
- **spec -> containers**: this is a list of containers that will be running within the Pod.
- **spec -> containers -> image**: the container image will be used
- **spec -> containers -> ports**: the container ports that will be exposed

```bash
kubectl apply -f simple-pod.yml
```

What will happen after applying this configuration in my k8s cluster?

So, basically the `kubectl` will request the `kube-api` to schedule the Pod creation.

![Pod Get Pods Output](/labs/images/pod_get_pods_output.png)

For now, we only need to know the pod was created its status is running, and we have 1 running.

Run the command:

```bash
kubectl get pods -o wide
```

to see the pods with more details.

![Pod Get Pods Wide Output](/labs/images/pod_get_pods_wide_output.png)

## Scalability, Availability and Reliability

Imagine that you have a crash in your application and you need to keep reliability and availability let's see if using a pod you can keep that.

```bash
kubectl delete pod nginx
```

The truth is that if you want to use a Kubernetes cluster, you probably want to manage many workload applications, maybe use a microservice architecture or increase the number of replicas of your system's specific module (microservice).

As you can see, the Pod was deleted, and that is it, we need to improve this implementation and use another kind of object to keep the scalability, availability and reliability of a good application.

How could we improve this scenario?

Let's comprehend the [ReplicaSet](https://programmingonmars.io/labs/managing-pods-using-replicaset)
::