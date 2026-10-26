//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Wahoo!"
compliments[1]="Super!"
compliments[2]="Amazing!"
compliments[3]="Brilliant!"
compliments[4]="Perfect!"
compliments[5]="Fantastic!"
compliments[6]="Well done!"
compliments[7]="Excellent!"
compliments[8]="Spot on!"
compliments[9]="That's right!"
compliments[10]="Splendid!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="From the below choices, what is the best example of an authentic assessment?"
choice1[1]="Memorizing medical terminology for an anatomy and physiology exam"
choice1[2]="Rewriting lecture notes for an art history class"
choice1[3]="Creating a website in a web design and communications class"
choice1[4]="Writing a term paper for a literature class"

question[2]="What is the first step in backward design?"
choice2[1]="Identifying learning objectives"
choice2[2]="Creating activities and assessments"
choice2[3]="Developing lecture materials"
choice2[4]="Designing course modules and content"

question[3]="What are the core components of the TILT (Transparency in Learning and Teaching) framework?"
choice3[1]="Theory, instruction, and testing"
choice3[2]="Purpose, task, and criteria for success"
choice3[3]="Planning, practicing, and performing"
choice3[4]="Explanation, demonstration, and observation"

question[4]="What is an example of constructivism?"
choice4[1]="Memorizing facts from a lecture"
choice4[2]="Creating an introductory video for class"
choice4[3]="Connecting a new calculus concept to a real-world problem and solving it"
choice4[4]="Reciting verse from creative poetry"

question[5]="What is an example of behaviorism?"
choice5[1]="Translating a book into another language"
choice5[2]="Reflecting on your philosophical beliefs"
choice5[3]="Deconstructing an argument"
choice5[4]="Receiving positive reinforcement for correct answers on a digital exam"

question[6]="What is an example of cognitivism?"
choice6[1]="Creating flashcards and concept maps to study for an exam"
choice6[2]="Actively listening to a podcast"
choice6[3]="Using Grammarly to proofread a paper"
choice6[4]="Learning through repetition of tasks"

question[7]="What is the purpose of summative assessments?"
choice7[1]="Determines whether an instructor earns tenure"
choice7[2]="Provides iterative feedback to shape and support learning"
choice7[3]="Offers quality feedback for how the instructor can improve their course"
choice7[4]="Evaluates and measures the extent of learning at the end of the course"

question[8]="What is the purpose of formative assessment?"
choice8[1]="Shapes and supports learning through iterative feedback"
choice8[2]="Measures whether the course achieved its goals"
choice8[3]="Identifies ways for the instructor to improve their course map"
choice8[4]="Allows flexibility with choosing how to approach and submit an assignment"

question[9]="What is the purpose of Universal Design for Learning (UDL)?"
choice9[1]="Provide multiple means for engagement, representation, and action and expression"
choice9[2]="Create opportunities for multimedia projects that enrich learning"
choice9[3]="Help each student access the same lecture materials equitably"
choice9[4]="Reinforce the importance of standardized testing"

question[10]="How do learning objectives differ from course goals?"
choice10[1]="These are synonyms used interchangeably."
choice10[2]="Learning objectives are generally broad, whereas course goals are very specific"
choice10[3]="Learning objectives are specific and measurable, whereas course goals are general and broad in nature"
choice10[4]="Learning objectives are shaped by students, whereas course goals are defined by the instructor."

solution[1]="c"
solution[2]="a"
solution[3]="b"
solution[4]="c"
solution[5]="d"
solution[6]="a"
solution[7]="d"
solution[8]="a"
solution[9]="a"
solution[10]="c"
