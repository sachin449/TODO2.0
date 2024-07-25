// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


// function Avava() {
//   return (
//     <Avatar>
//     <AvatarImage src="https://github.com/shadcn.png" />
//     <AvatarFallback>CN</AvatarFallback>
//   </Avatar>
  
//   )
// }

// export default Avava

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

 function Accor() {
  return (
    <div>
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}
export default Accor