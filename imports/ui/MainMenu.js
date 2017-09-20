import React from 'react';

export default () => {
    return (
<ul id="menu">

<li><a href="#" className="drop">Home</a>
   <div className="dropdown_2columns">

       <div className="col_2">
           <h2>Welcome !</h2>
       </div>

       <div className="col_2">
           <p>Hi and welcome here ! This is a showcase of the possibilities of this awesome Mega Drop Down Menu.</p>             
           <p>This item comes with a large range of prepared typographic stylings such as headings, lists, etc.</p>             
       </div>

       <div className="col_2">
           <h2>Cross Browser Support</h2>
       </div>
        
       <div className="col_1">
           <img src="img/browsers.png" width="125" height="48" alt="" />
       </div>
        
       <div className="col_1">
           <p>This mega menu has been tested in all major browsers.</p>
       </div>
      
   </div>
</li>

<li><a href="#" className="drop">5 Columns</a>

   <div className="dropdown_5columns">
    
       <div className="col_5">
           <h2>This is an example of a large container with 5 columns</h2>
       </div>
        
       <div className="col_1">
           <p className="black_box">This is a dark grey box text. Fusce in metus at enim porta lacinia vitae a arcu. Sed sed lacus nulla mollis porta quis.</p>
       </div>
        
       <div className="col_1">
           <p>Phasellus vitae sapien ac leo mollis porta quis sit amet nisi. Mauris hendrerit, metus cursus accumsan tincidunt.</p>
       </div>
        
       <div className="col_1">
           <p className="italic">This is a sample of an italic text. Consequat scelerisque. Fusce sed lectus at arcu mollis accumsan at nec nisi porta quis sit amet.</p>
       </div>
        
       <div className="col_1">
           <p>Curabitur euismod gravida ante nec commodo. Nunc dolor nulla, semper in ultricies vitae, vulputate porttitor neque.</p>
       </div>
        
       <div className="col_1">
           <p className="strong">This is a sample of a bold text. Aliquam sodales nisi nec felis hendrerit ac eleifend lectus feugiat scelerisque.</p>
       </div>
    
       <div className="col_5">
           <h2>Here is some content with side images</h2>
       </div>
       
       <div className="col_3">
        
           <img src="img/01.jpg" width="70" height="70" className="img_left imgshadow" alt="" />
           <p>Maecenas eget eros lorem, nec pellentesque lacus. Aenean dui orci, rhoncus sit amet tristique eu, tristique sed odio. Praesent ut interdum elit. Sed in sem mauris. Aenean a commodo mi. Praesent augue lacus.<a href="#">Read more...</a></p>
    
           <img src="img/02.jpg" width="70" height="70" className="img_left imgshadow" alt="" />
           <p>Aliquam elementum felis quis felis consequat scelerisque. Fusce sed lectus at arcu mollis accumsan at nec nisi. Aliquam pretium mollis fringilla. Nunc in leo urna, eget varius metus. Aliquam sodales nisi.<a href="#">Read more...</a></p>
        
       </div>
        
       <div className="col_2">
        
           <p className="black_box">This is a black box, you can use it to highligh some content. Sed sed lacus nulla, et lacinia risus. Phasellus vitae sapien ac leo mollis porta quis sit amet nisi. Mauris hendrerit, metus cursus accumsan tincidunt.Quisque vestibulum nisi non nunc blandit placerat. Mauris facilisis, risus ut lobortis posuere, diam lacus congue lorem, ut condimentum ligula est vel orci. Donec interdum lacus at velit varius gravida. Nulla ipsum risus.</p>
        
       </div>
    
   </div>

</li>

<li><a href="#" className="drop">4 Columns</a>

   <div className="dropdown_4columns">
    
       <div className="col_4">
           <h2>This is a heading title</h2>
       </div>
        
       <div className="col_1">
        
           <h3>Some Links</h3>
           <ul>
               <li><a href="#">ThemeForest</a></li>
               <li><a href="#">GraphicRiver</a></li>
               <li><a href="#">ActiveDen</a></li>
               <li><a href="#">VideoHive</a></li>
               <li><a href="#">3DOcean</a></li>
           </ul>   
             
       </div>

       <div className="col_1">
        
           <h3>Useful Links</h3>
           <ul>
               <li><a href="#">NetTuts</a></li>
               <li><a href="#">VectorTuts</a></li>
               <li><a href="#">PsdTuts</a></li>
               <li><a href="#">PhotoTuts</a></li>
               <li><a href="#">ActiveTuts</a></li>
           </ul>   
             
       </div>

       <div className="col_1">
        
           <h3>Other Stuff</h3>
           <ul>
               <li><a href="#">FreelanceSwitch</a></li>
               <li><a href="#">Creattica</a></li>
               <li><a href="#">WorkAwesome</a></li>
               <li><a href="#">Mac Apps</a></li>
               <li><a href="#">Web Apps</a></li>
           </ul>   
             
       </div>

       <div className="col_1">
        
           <h3>Misc</h3>
           <ul>
               <li><a href="#">Design</a></li>
               <li><a href="#">Logo</a></li>
               <li><a href="#">Flash</a></li>
               <li><a href="#">Illustration</a></li>
               <li><a href="#">More...</a></li>
           </ul>   
             
       </div>
        
   </div>

</li>

<li className="menu_right"><a href="#" className="drop">1 Column</a>

   <div className="dropdown_1column align_right">
    
           <div className="col_1">
            
               <ul className="simple">
                   <li><a href="#">FreelanceSwitch</a></li>
                   <li><a href="#">Creattica</a></li>
                   <li><a href="#">WorkAwesome</a></li>
                   <li><a href="#">Mac Apps</a></li>
                   <li><a href="#">Web Apps</a></li>
                   <li><a href="#">NetTuts</a></li>
                   <li><a href="#">VectorTuts</a></li>
                   <li><a href="#">PsdTuts</a></li>
                   <li><a href="#">PhotoTuts</a></li>
                   <li><a href="#">ActiveTuts</a></li>
                   <li><a href="#">Design</a></li>
                   <li><a href="#">Logo</a></li>
                   <li><a href="#">Flash</a></li>
                   <li><a href="#">Illustration</a></li>
                   <li><a href="#">More...</a></li>
               </ul>   
                 
           </div>
            
   </div>
    
</li>

<li className="menu_right"><a href="#" className="drop">3 columns</a>

   <div className="dropdown_3columns align_right">
        
       <div className="col_3">
           <h2>Lists in Boxes</h2>
       </div>
        
       <div className="col_1">

           <ul className="greybox">
               <li><a href="#">FreelanceSwitch</a></li>
               <li><a href="#">Creattica</a></li>
               <li><a href="#">WorkAwesome</a></li>
               <li><a href="#">Mac Apps</a></li>
               <li><a href="#">Web Apps</a></li>
           </ul>   

       </div>
        
       <div className="col_1">

           <ul className="greybox">
               <li><a href="#">ThemeForest</a></li>
               <li><a href="#">GraphicRiver</a></li>
               <li><a href="#">ActiveDen</a></li>
               <li><a href="#">VideoHive</a></li>
               <li><a href="#">3DOcean</a></li>
           </ul>   

       </div>
        
       <div className="col_1">

           <ul className="greybox">
               <li><a href="#">Design</a></li>
               <li><a href="#">Logo</a></li>
               <li><a href="#">Flash</a></li>
               <li><a href="#">Illustration</a></li>
               <li><a href="#">More...</a></li>
           </ul>   

       </div>
        
       <div className="col_3">
           <h2>Here are some image examples</h2>
       </div>
        
       <div className="col_3">
           <img src="img/02.jpg" width="70" height="70" className="img_left imgshadow" alt="" />
           <p>Maecenas eget eros lorem, nec pellentesque lacus. Aenean dui orci, rhoncus sit amet tristique eu, tristique sed odio. Praesent ut interdum elit. Maecenas imperdiet, nibh vitae rutrum vulputate, lorem sem condimentum.<a href="#">Read more...</a></p>

           <img src="img/01.jpg" width="70" height="70" className="img_left imgshadow" alt="" />
           <p>Aliquam elementum felis quis felis consequat scelerisque. Fusce sed lectus at arcu mollis accumsan at nec nisi. Aliquam pretium mollis fringilla. Vestibulum tempor facilisis malesuada. <a href="#">Read more...</a></p>
       </div>
    
   </div>
    
</li>


</ul>
  );
};