1.	How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.

Answer: I spent almost three hours on the technical test. In this time I tried to create a basic framework around Cucumber, testNG and Maven. If I had more time I would have added Page object model approach to increase the code re-usability. Also, I would have tried to create the test scenarios more concrete. For eg: For the validation of 1st scenario, when I search using the valid postal code “AR511AA” the website provides a list of restaurants. I have validated this by counting the number of restaurants links displayed on the website and if the number is greater than 0 (zero) then test case is passed. However, I wonder if I use the postal code during a time when all the restaurants are closed then the website would return 0 (zero) and the test case will fail. I feel that this can raise ‘False Negative’ condition.


2.	What do you think is the most interesting trend in test automation?

Answer: I think RPA (Robotics Process Automation) is one the most interesting trends in test automation. One of the reason for this is because it provides the ability to easily automate cross platform applications. Also, some RPA tools (such as Automation Anywhere) does not require coding skills and can be used by business or non technical users with little training. Moreover, some of the RPA tools have cognitive ability to make human like decision. However, currently RPA is mostly used in Business Process Automation and not necessarily on the Application Testing Automation.

3.	How would you implement test automation in a legacy application? Have you ever had to do this?

Answer: First of all I would calculate the return on investment if we automate the legacy application. I would use parameters like cost of the tool, time required to automate and if the company has any near future plan to migrate the legacy application to other platform. So if the return on investment is good I would go ahead with tool selection and start with the automation of Smoke Test and some basic end to end flows. This way I can create a proof of concept with the tool and potray efficiency of the automation to the management. Then I will go ahead and target Regression Test cases that are run more often.

Yes, I was involved in the automation of one of the mainframe application in my previous job


4.	How would you improve the customer experience of the JUST EAT website?

Answer: Currently, the website only allows search using the postal code. One of the improvements could be adding more search options like using the street number and street name and giving auto suggestion of the actual address. Secondly, integrating with google maps API to get the current location of the user and search near me option. 

5.	Please describe yourself using JSON.

Answer:

{
	"name": "Ajinkya Jadhav",
	"age": 28,
	"email": "ajinkya.jadhav38@gmail.com",
	"status": "Single",
	"address": {
		"street": "311 The West Mall",
		"city": "Etobicoke"
	},
	"skills": ["Automation", "Testing", "QA"],
	"tools": ["Selenium", "Cucumber Framework"]
}

