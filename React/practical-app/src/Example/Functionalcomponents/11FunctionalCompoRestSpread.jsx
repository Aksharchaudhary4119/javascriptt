import React from 'react';

const FunctionalCompoRestSpread = () => {

    // let sum = (kaipan,anything,akia)=>{
    //     console.log(kaipan,anything,akia);
    //     return kaipan+anything+akia
    // }



    let sum = (kaipan, ...anything) => {
        // console.log(kaipan,anything);
        let add = 0
        anything.forEach(element => {
            add += element
        });
        return kaipan + add
    }

    let userDetails=(username,pass,gender,mobile)=>{
        console.log(username,pass,gender,mobile);
    }

    userDetails("akshar","123","Male","9909730150")
    let arr = ["akshar","123","Male","9909730150"]
    userDetails(arr)
    userDetails(arr[0],arr[1],arr[2])
    userDetails(...arr)



    return (
        <>
                        
            <p>{sum(50, 90)} sum(50,90) sum function and 50,90 is Arguments while we send the data and kaipan,anything will be considered as parameter </p>
            <p>88+66 = {sum(88,66)}</p>
            <p>88+99+879+879+45 = {sum(88, 99, 879, 879, 45)}</p>
            <p>{sum(45, 65)}</p>
            <p>{sum(78, 89)}</p>
            <p>{sum(45, 232)}</p>

            function myBio(firstName, lastName, ...otherInfo) &#123; 
                return otherInfo;
                &#125;

            // Invoke myBio function while passing five arguments to its parameters:
            myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

            // The invocation above will return:
            ["CodeSweetly", "Web Developer", "Male"]
        
        <br />
        <br />
        <p>
        While the rest operator gathers all remaining elements or arguments into an array. In summary, this means that the rest operator is used to gather elements into an array, while the spread operator is used to spread the content of an array
        </p>


        </>
    );
};

export default FunctionalCompoRestSpread;