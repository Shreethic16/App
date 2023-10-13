package com.brocode.shreethic.client;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.brocode.shreethic.vo.Feedback;



@FeignClient(name = "FEEDBACK", url = "${application.config.feedback-service.url}")
public interface FeedbackClient {

    @PostMapping("/add")
    boolean saveFeedback(@RequestBody com.brocode.shreethic.dto.FeedbackRequest request);

    @GetMapping("/get")
    List<Feedback> getFeedbacks();
}