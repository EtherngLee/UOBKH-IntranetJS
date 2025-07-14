package com.intranet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.flyway.FlywayAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Bean;

import com.intranet.s3.S3Buckets;
import com.intranet.s3.S3Service;

@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    HibernateJpaAutoConfiguration.class,
    FlywayAutoConfiguration.class
})
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @Bean
    CommandLineRunner runner(
            S3Service s3Service,
            S3Buckets s3Buckets) {
        return args -> {
            s3Service.putObject(s3Buckets.getFolder(), "foo/bar", "Hello, world!".getBytes());
            byte[] obj = s3Service.getObject(s3Buckets.getFolder(), "foo/bar");
            System.out.println(new String(obj));
        };
    }

} 