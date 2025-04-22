---
title: Difference Between PUT and PATCH
image: '/articles/images/put_patch_header_image.png'
description: 'What the difference between PUT and PATCH'
author: Andre Lucas
date: Thu Jul 18 2024
tags: [REST API, Fundamentals, Programming, Software Engineering]
published: true
---

::blog-post
---
date: Thu Jul 18 2024
tags: [REST API, Fundamentals, Programming, Software Engineering]
---
# Difference Between PUT and PATCH

Hey there, the objective of this story format is to be fast and tell you fundamentals where we sometimes don't question ourselves in our daily lives.

## What is the main difference between PUT and PATCH?

So, let's create a scenario where you have an e-commerce and one endpoint is responsible for creating a product.

![E-commerce service diagram](/articles/images/put_patch_ecommerce_diagram.png)

After creating a new product. We noticed that the price was wrong. The normal first thing is to have an endpoint to "update" the whole entity by passing the ID.

![PUT update diagram](/articles/images/put_patch_update_diagram.png)

Normally this is a common situation. Some developers would say that PUT is for updating, but it is not really, PUT is to replace **completely** or **create**.

Yeah, the product 111 could not exist and we could create it.

To improve this, we can use the PATCH verb, because we only want to change the price ok?

![PATCH diagram](/articles/images/put_patch_diagram.png)

## PATCH

So the patch is to update individual fields of the existing resources.

We could do something like

![PATCH change price diagram](/articles/images/put_patch_change_price_diagram.png)

If the product 111 doesn't exist we will get an error.

Of course in the PUT scenario, we can check if there is an entity before or depends on the way that we're implementing the database layer of our application we probably get an error too, but in theory is possible to create instead of return an error.

## Conclusion

If you want to have an endpoint that only modifies individual fields according to [RFC 5789](https://tools.ietf.org/html/rfc5789) should use the PATCH verb.

If you want to have an endpoint to modify completely a resource we should use the PUT verb according to [RFC 2616](https://tools.ietf.org/html/rfc2616).
::