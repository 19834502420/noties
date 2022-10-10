package com.yuanian.console.custom;

import com.yuanian.auth.service.IHealthyHtmlService;
import com.yuanian.auth.service.IHealthyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * @author Administrator
 * @since Wed Apr 29 13:26:32 CST 2020
 */
@RestController
public class Healthz {

    @Autowired
    private IHealthyService iHealthyService;

    @Autowired
    private IHealthyHtmlService healtzService;

    @GetMapping(path = "console/healthz")
    public String healthz() {
        return "console-ok";
    }

    @GetMapping("console/healtyzReport/bussiness")
    public List<Map<String, Object>> bussinessReport(HttpServletResponse response) throws Exception {
        List<Map<String, Object>> result = iHealthyService.bussnessReport("console");
        String bussinessHtml = healtzService.generateHealthzHtml("业务服务", result);
        response.setHeader("Content-type", "text/html;charset=UTF-8");
        response.getOutputStream().write(bussinessHtml.getBytes());
        response.getOutputStream().flush();
        return null;
    }

}
