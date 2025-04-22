---
title: What is Kubernetes how can I use it?
image: '/articles/images/kubernetes_logo.png'
description: "Kubernetes is a platform for managing containerized workloads and services. that make easy declarative configuration and automation."
author: Andre Lucas
date: Tue Aug 06 2024
tags: [k8s, infrastructure, kubernetes, devops]
published: true
---

::blog-post
---
date: Tue Aug 06 2024
tags: [k8s, infrastructure, kubernetes, devops]
---
# What is Kubernetes how can I use it?

[Kubernetes](https://kubernetes.io), also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

Kubernetes is a platform for managing containerized workloads and services. that make easy declarative configuration and automation.

## Overview

Kubernetes works in a cluster, consisting of a set of worker machines, these machines are called nodes, that run containerized applications, and every cluster has at least one worker node.

Also, a Kubernetes cluster has a control plane, it manages the worker nodes and the cluster state.

These are the various components that you need to have for a complete and working Kubernetes cluster.

![Kubernetes Cluster Diagram](/articles/images/kubernetes_cluster_diagram.png)

The components of a Kubernetes cluster by kubernetes.io

In my opinion, this section is very important, mainly if you want to have a differential in your career, and this knowledge will help me a lot in many situations to solve problems.

Sometimes we only have an interest in knowing how works the motor of a car when we have a problem on the highway and the car

## Kubernetes Control Plane Components

The Control Plane manages the cluster state. It makes decisions about the cluster, for example, increasing the number of pod replicas or scheduling something.

- kuber-api - is the central point of communication from the Kubernetes cluster it is the front end of the Kubernetes control plane.
- etcd - it's basically the store used for Kubernetes for all cluster data. Make sure you have a backup plan for your etcd.
- kube-scheduler - It is responsible for watching newly created pods, checking what are available nodes and assigning the pods created for the available node.
- kube-controll-manager - runs controller process. It is responsible for cluster orchestration.

The Control Plane must not run any pods

## Nodes Components

The node components are in every node of the cluster, they are responsible for maintaining the pods running and providing the Kubernetes runtime environment.

- Kubelet - is a node agent, that manages the state of nodes, so it receives the control plane commands
- kube-proxy - It manages the network and network resources of nodes and redirects to containers.
- Container runtime - this component enables the Kubernetes to run containers.

## Let's install a K8s Cluster

Before you follow this step, [please install the Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) according to your environment

https://kind.sigs.k8s.io/docs/user/quick-start/

For this series, let's prepare an environment for you to follow the examples.

For now, let's prepare a local environment to focus only on the fundamentals at the end of the series, we will together create a Kubernetes cluster like a production environment.

There are many options to create a K8s locally

- Minikube
- Kind
- k3d

I've been using Kind and it has been serving me

Let's use the mode of Multi-node clusters

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
  - role: worker
  - role: worker
  - role: worker
```

Basically, we're talking to Kind, "Please, create for me, a cluster with 4 machines. 1 Control Plane and 3 workers nodes"

Now, run the command in your terminal:

```bash
kind create cluster --config kind-config.yml --name programmingonmars
```

You should have this result below

![Kubernetes Terminal Output](/articles/images/kubernetes_terminal_output.png)

To use your k8s cluster, run the command below

```bash
kubectl cluster-info --context kind-programmingonmars
```

Now we're connected in our k8s cluster!

![Kubernetes Cluster Creation](/articles/images/kubernetes_cluster_creation.png)

Let's check the nodes using the command:

```bash
kubectl get nodes
```

This is so cool we created 3 works and 1 control plane as we declared in the kind-config.yml

![Kubernetes Get Nodes](/articles/images/kubernetes_get_nodes.png)

## How Kind Works?

[Kind](https://kind.sigs.k8s.io) is a tool for running local Kubernetes clusters using Docker container "nodes".
kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.

Só, if we run the command:

```bash
docker container ls
```

We can see 4 containers running

![Kubernetes Docker Containers](/articles/images/kubernetes_docker_containers.png)

Now you're ready to start your new journey in the Kubernetes world, let's run a First Application on Kubernetes

Tags: k8s, infrastructure, kubernetes, devops
::