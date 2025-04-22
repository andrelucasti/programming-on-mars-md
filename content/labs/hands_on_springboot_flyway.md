---
title: Hands on — Springboot + Flyway
image: '/labs/images/springboot_flyway_header.png'
description: 'Hands on — Springboot + Flyway'
author: André Lucas
date: Mon Jul 22 2024
tags: [Spring Boot, Hands On, Flyway, SQL]
published: true
---

::blog-post
---
date: Mon Jul 22 2024
tags: [Spring Boot, Hands On, Flyway, SQL]
---

# Hands on — Springboot + Flyway

Before you reading on, be sure that you read the fundamentals about migration scripts in the article [Database Migration for Beginners](https://programmingonmars.io/post/database-migrations-for-beginners) or you have some bits of knowledge about this topic.

## Techstack

- Springboot 3.0
- Flyway
- PostgreSQL

First, we need to add the dependencies.

```xml
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
    <version>9.8.3</version>
</dependency>

<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

## Datasource configuration

```yaml
spring:
  datasource:
    hikari:
      jdbc-url: jdbc:postgresql://localhost:54322/wallet-transaction
      pool-name: wallet-transaction-hikari-pool
      driver-class-name: org.postgresql.Driver
      username: wallet-transaction
      password: wallet-transaction

# application.yml
```

```java
@EnableJpaRepositories(basePackages = {"com.crypto.coinwallet.andrelucas.dataprovider"})
@Configuration
@EnableTransactionManagement
public class DataSourceConfiguration {

    @Bean
    @ConfigurationProperties(value = "spring.datasource.hikari")
    DataSource dataSource(){
        return DataSourceBuilder.create() // DataSourceBuilder<capture of ?>
            .type(HikariDataSource.class) // DataSourceBuilder<HikariDataSource>
            .build();
    }
}
```

DataSourceConfiguration.java

## Flyway configuration

By default, the flyway migration scripts, are in the folder `db/migrations`

![Flyway Folder Structure](/labs/images/flyway_folder_structure.png)

But, if you can change you only need to add this line in the application.yml file

```yaml
flyway:
  locations: db/migration
```

Another way is to configure the flyway programmatically

```java
@Bean(name = "managerFlyway")
public Flyway flyway(@Qualifier("clientDataSource") final DataSource dataSource){
    final var configuration = new ClassicConfiguration();
    configuration.setDataSource(dataSource);
    configuration.setLocations(new Location(descriptor: "classpath:flyway_client"));

    final Flyway flyway = new Flyway(configuration);
    flyway.migrate();

    return flyway;
}
```

In this case, the flyway bean receives the data source configuration bean, and another path where is the migration scripts.

![Flyway Migration Files](/labs/images/flyway_migration_files.png)

## References

1. [https://docs.spring.io/spring-data/jpa/docs/current/reference/html/](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
2. [https://flywaydb.org/](https://flywaydb.org/)
3. [https://martinfowler.com/articles/evodb.html](https://martinfowler.com/articles/evodb.html)

## Full Code

[https://github.com/andrelucasti/micro-coin-wallet](https://github.com/andrelucasti/micro-coin-wallet)

::
