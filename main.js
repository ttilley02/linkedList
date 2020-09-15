const LinkedList = require("./practice");

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");
 

  return SLL;
}

const display = () => {
  let llDisplay = JSON.stringify(main());
  console.log(llDisplay);
};

const size = () =>{
  counter = 1;
  let currentNode = main().head.next;

  if(!currentNode){
    return
  }

  while (currentNode !== null){
    counter++
    currentNode= currentNode.next}
  return counter;
}

const isEmpty = () => {
  let currentNode = main().head.next;
  if(currentNode !== null){
    return "is not empty"
  }
  return "is empty"
}

const findPrevious = (item) => {
  let currentNode = main().head;
  let previousNode = main().head;
 
  while(currentNode.value !== item && currentNode !== null){
    previousNode = currentNode
    currentNode = currentNode.next
  }
   return previousNode
 
 }



const findLast = () => {
let previousNode = main().head;
 let currentNode = main().head;
 

 while(currentNode!== null){
   previousNode = currentNode
   currentNode = currentNode.next
 }
  return previousNode

}

const reverseLinkedList = (list) =>{
  const reverse = new LinkedList();

  let currentNode = list.head;

  while(currentNode !== null){
    reverse.insertFirst(currentNode.value)
    currentNode= currentNode.next;
  }

  return JSON.stringify(reverse);
}



main();
display();
console.log("Size of thi linkedList is ", size());
console.log("This ",isEmpty());
console.log("This last node is ",findLast());
console.log("This previous for this node is  ", findPrevious("Helo"));
console.log(reverseLinkedList(main()))
