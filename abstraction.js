function Student (name,age,dist){

    this.name=name;
    this.age=age;
    this.dist=dist;

}

this.getStudentDetails = function(){

    console.log(`name: + this.name +age:this.age`);
}
let emp1=new Student('sagar,20,pune');
emp1.getStudentDetails();
