//                           console.log("Well-come to this Laiabrary.!");                                //



const input=require("prompt-sync")();
const fs=require("fs")
const lib_data={};
let  all_books=["!-----> Books_Labrary <-----!",
                {1:"Raja and Rani"},{2:"vikram Betal"},{3:"Harry poter"},
                {5:"War and peace"},{6:"Heart of Darkness"},{7:"Gita"},
                {8:"Peace of mind"},{9:"English vocablary;"},{10:"Campus life"}]
let Books_Category=["Book categrys-->","1).Horror_Books","2).Cartoon_Books","3).Love_Books","4).magician_Books"]
let Books1=["1).Devil_Book","2).Black_Tom","3).Bhatkti_Aatma"]
let Books2 =["1).Dorry_moon","2).Tom & jerry","3).The_Lion"]
let Books3 =["1).Raja & Rani","2).Love of first","3.Romantic_Book"]
let Books4 =["1).Harry_Poter","2).unicorn","3).sky_lalten"]
class category_books{
    constructor(Books1,Books2,Books3,Books4){
        this.books=Books1
        this.book5=Books2
        this.book6=Books3
        this.book7=Books4    

    }
    category_1(){
        console.log('asdfgh',this.books);
        if(fs.existsSync('user.json')){
            let read = fs.readFileSync('user.json','utf-8')
            // console.log(read)
            let lib_data=JSON.parse(read)
            const phone_no=input("Enter your phone_no =>")
            lib_data [phone_no]= { book_name:input("Enter which Book =>"),
            book_qunt:input("Enter book_quantaty =>"),
            user_name:input("Enter your user_name =>"),
            phone:phone_no}
            fs.writeFileSync("user.json",JSON.stringify(lib_data,null,4))
            console.log('your data stored successfully....');
        }else{
            //  let lis=[]
            fs.writeFileSync("user.json",JSON.stringify(lib_data,null,4))
            console.log('file created successfully...');
            this.category_1()
        }
    }
    category_2(){

    }
}
let Books_obj=new category_books(Books1,Books2,Books3,Books4)



class Big_laibrary{          //stop.......
    constructor(all_books,Books_Category){
        this.books=all_books
        this.Catigory=Books_Category
    }
    show_books(){
        console.log(this.books);
    }
    rent_books(){
        console.log("!----> Books_Category <----!");
        console.log(Books_Category);
        let choice_books=input("Choice your category =>")
        if (choice_books=="1"){
            Books_obj.category_1()
        }else if(choice_books=="2"){
            
        }else if(choice_books=="3"){
           
        }else if(choice_books=="3"){
            
        }
    }
}
let obj=new Big_laibrary(all_books,Books_Category)



// let Books_stores=new Books_stores(["!-----> Books_Labrary <-----!",
//                 {1:"Raja and Rani"},{2:"vikram Betal"},{3:"Harry poter"},
//                 {5:"War and peace"},{6:"Heart of Darkness"},{7:"Gita"},
//                 {8:"Peace of mind"},{9:"English vocablary;"},{10:"Campus life"}])

while (true){
    console.log("Well-come to this Laiabrary.!");

    console.log("\npress 1). For see all books\n",
                  "press 2).For rent books\n",
                  "press 3).For return books\n",
                  "press 4).For add books\n",
                  "press 5).For Exits laibrary\n"
                  );
    const choice=input("Enter your choice => ");
    if (choice == "1"){
        obj.show_books()
    } else if (choice == "2"){
        obj.rent_books()
    } else if (choice == "3"){
        console.log("wait");
    } else if (choice == "4"){
        console.log("wait");
    } else if (choice =="5"){
        break
    }
}














// let Books_stores=new Books_stores(["!-----> Books_Labrary <-----!",
//                 {1:"Raja and Rani"},{2:"vikram Betal"},{3:"Harry poter"},
//                 {5:"War and peace"},{6:"Heart of Darkness"},{7:"Gita"},
//                 {8:"Peace of mind"},{9:"English vocablary;"},{10:"Campus life"}])