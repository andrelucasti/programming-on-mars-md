---
title: Transition Architecture
image: '/articles/images/transition_architecture_header.png'
description: 'Monolithic vs Microservices and Transition Architecture'
author: Andre Lucas
date: Sun Jul 28 2024
tags: [Microservice, Monolithic, Software Architecture, Software Development]
published: true
---

::blog-post
---
date: Sun Jul 28 2024
tags: [Microservice, Monolithic, Software Architecture, Software Development]
---
# Transition Architecture

![Transition Architecture](/articles/images/transition_architecture_header.png)

Monolithic Architecture it's no news to anyone. This architectural style perhaps makes sense to many organization, mainly to startups which want to release their MVPs for example.

![Monolithic Diagram](/articles/images/monolithic_diagram.png)

However, good products have the potential to grow and, consequently, your organization need to grow with them. Therefore, over time it will make sense to change the architecture

## Companies which have:

- Small team
- Proof of concept (POC)
- Financial restriction (little cash)

Monolithic is a good choice

## Bounded Context to Monolithic Applications

Start creating an application with a monolithic architecture, an important thing that you need to know is to separate your bounded context into modules.

These modules can become microservices in the future.

![Bounded Context Diagram](/articles/images/bounded_context_diagram.png)

For example, we can see two different teams focusing in their area and working together

![Teams Modules Diagram](/articles/images/teams_modules_diagram.jpeg)

However, the application is a single application that can become microservices in the future.

Bounded Context can allow the **teams to work in parallel**, avoiding conflicts in integration moments, and future migration challenges to the microservices architecture, make simple to migrate them.

## Communication Between Modules

Use a Domain Event to capture an occurrence of something that happened in the domain. This is an extremely powerful modeling tool.

Vaughn, Vernon. Implementing Domain-Driven Design (p. 285). Pearson Education. Kindle Edition.

The facility to have modules together in the same application becomes easy integration between them.

Thus just instantiate some classes and it's possible to use other modules.

Therefore, this situation can bring couples between modules. To prepare for integration between then to the future, it is possible to use events between modules.

![Modules Queue Diagram](/articles/images/modules_queue_diagram.jpeg)

To do this there are many ways:

- Transactional Outbox
- Domain Events

## Decoupling Database

But we can see that the data are coupled because they are joined in the same database. To make it easier to manage, or migrate to microservices architecture, for example, we can create a modular monolithic with a decomposed database based on Newman, Sam. Building Microservices chapter 1

![Decoupling Database Diagram](/articles/images/decoupling_database_diagram.png)

## CI/CD

So, each module can be implemented independently, but to deploy them, it's necessary to do it together yet. Look at the image below

![Modular Monolith Diagram](/articles/images/modular_monolith_diagram.png)

## Conclusion

This is not the only format to implement a modular monolithic application, and this is not a rule, but my perspective and a suggestion.

## References

1. Newman, Sam. Building Microservices
2. Vaughn, Vernon. Implementing Domain-Driven Design

::