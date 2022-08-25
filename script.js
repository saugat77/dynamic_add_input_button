function add_more_field(){
    var counter = 1;
    alert('Are you sure, you want to add child?');
     html =
     '<div class="left">\
     <div class="mb-6">\
             <div class="flex items-center space-x-2 p-2 border-2 rounded border-purple-700">\
                 <span class="text-purple-600">\
                 </span>\
                 <input class="w-full p-1 bg-transparent placeholder-purple-900 placeholder-opacity-75 text-sm font-medium autofill-transparent" type="text" name="child_first_name'+counter+'" placeholder="Child first name">\
             </div>\
         </div>\
     </div>\
         <div class="right">\
         <div class="mb-6">\
             <div class="flex items-center space-x-2 p-2 border-2 rounded border-purple-700">\
                 <span class="text-purple-600">\
                 </span>\
                 <input class="w-full p-1 bg-transparent placeholder-purple-900 placeholder-opacity-75 text-sm font-medium autofill-transparent" type="text" name="child_last_name '+counter+'" placeholder="Child last name">\
             </div>\
         </div>\
         </div>\
         <div class="mb-3">\
             <div class="flex items-center space-x-2 p-2 border-2 rounded border-purple-700">\
                 <span class="text-purple-600">\
                 </span>\
                 <input class="w-full p-1 bg-transparent placeholder-purple-900 placeholder-opacity-75 text-sm font-medium autofill-transparent" type="integer" name="child_age'+counter+'" placeholder="Child age">\
             </div>\
             </div>'
             var form = document.getElementById('child_field')
             form.innerHTML+=html
}
