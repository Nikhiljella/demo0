package com.example.demo0.controller;

import com.example.demo0.model.Msgs;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class msgcontroller {
    @ResponseBody
    @GetMapping("/Msgs")
    Msgs send()
    {
        //Msgs msgs = new Msgs();
        //msgs.setAbc("kfduj");

        //return msgs;
        return new Msgs("shjb") ;
    }

}
