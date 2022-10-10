package com.yuanian.console.custom.config;

import com.github.xiaoymin.knife4j.spring.annotations.EnableKnife4j;
import com.yuanian.common.config.SwaggerApiInfo;
import com.yuanian.common.config.SwaggerResourceConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.annotation.Order;
import springfox.bean.validators.configuration.BeanValidatorPluginsConfiguration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author liujy
 * @date 2020/4/2 14:46
 * 扫描路径分组名称等需要自行修改配置
 **/
@Configuration
@EnableSwagger2
@EnableKnife4j
@Import(BeanValidatorPluginsConfiguration.class)
public class SwaggerConfiguration {

    private static final String splitor = ";";

    @Bean(value = "consoleApi")
    @Order(value = 1)
    public Docket consoleMicroRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .enable(SwaggerResourceConfig.enable)
                .apiInfo(SwaggerApiInfo.groupApiInfo())
                .groupName("console-doc")
                .select()
                .apis(SwaggerApiInfo.basePackage("com.yuanian.console.client" + splitor + "com.yuanian.console.controller" + splitor + "com.yuanian.console.custom.client" + splitor + "com.yuanian.console.custom.controller"))
                .paths(PathSelectors.any())
                .build();
    }
}
