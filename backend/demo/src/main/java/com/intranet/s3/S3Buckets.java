package com.intranet.s3;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "aws.s3.buckets")
public class S3Buckets {

    private String folder;

    public String getFolder() {
        return folder;
    }

    public void setFolder(String customer) {
        this.folder = customer;
    }

}

