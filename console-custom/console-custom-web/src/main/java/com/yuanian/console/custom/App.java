package com.yuanian.console.custom;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.openfeign.EcsEnableFeignClients;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.transaction.annotation.EnableTransactionManagement;
/**
 * @author Administrator
 * @since Wed Apr 29 13:26:32 CST 2020
 */
@SpringBootApplication(scanBasePackages = { "com.yuanian" })
@EnableTransactionManagement(proxyTargetClass = true)
@MapperScan(basePackages = { "com.yuanian.**.dao" })
@EnableCaching
@EnableAspectJAutoProxy(proxyTargetClass = true, exposeProxy = true)
@EcsEnableFeignClients(currentServiceName = "console",basePackages = {"com.yuanian"})
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

}
