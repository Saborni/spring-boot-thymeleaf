package org.sab.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ThymeleafController {

    @RequestMapping("/demo")
    public String redirect(){
        return "demo";
    }

    @RequestMapping("/home")
    public String returnLibHomePage(){
        return "index";
    }

}
