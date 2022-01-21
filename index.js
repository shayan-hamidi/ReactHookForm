function MyHook(props) {
   const {handleSubmit,register,formState} = ReactHookForm.useForm();
   return(
       <>
   <form onSubmit={handleSubmit(props.formData)} >
       <div>
       <label htmlFor="name">نام  </label>
           <input type="text" {...register(
               'name',{
                   validate: value => !!value || 'fill the name field'
               }
               )} />
               <br />
               {formState.errors.name ? formState.errors.name.message : ''}
               <label htmlFor="familyName">نام خانوادگی  </label>
           <input type="text" {...register(
               'familyName',{
                   validate: value => !!value || 'fill the family name field',
               }
               )} />
               <br />
               {formState.errors.familyName ? formState.errors.familyName.message : ''}
               <label htmlFor="email">ایمبل  </label>
           <input type="email" {...register(
               'email',{
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            }
               }
               )} />
               </div>
               <div>
               <label htmlFor="phone">شماره همراه  </label>
           <input placeholder="09301023512" type="number" {...register(
               'phone',{validate: value => !!value || "fill the phone field"}
               )} />
               <br />
               {formState.errors.phone ? formState.errors.phone.message : ''}
               <label htmlFor="idNum">کد ملی  </label>
            <input type="number" {...register(
               'id Num',{}
               )} />
               <label htmlFor="pass">رمز عبور  </label>
           <input id="pass" type="password" {...register(
               'password',{}
               )} />
               <label htmlFor="confirmPass">تکرار رمز عبور  </label>
           <input id="confirmPass" type="password" {...register(
               'confirmPass',{}
               )} />
                   
               <button type="submit">Submit</button>
               </div>
   </form>
       </>
   );
}
function Root() {
    const formData = data =>{
        console.log(data);
        if(document.getElementById('pass').value !== document.getElementById('confirmPass').value){
            alert("passwords are not the same")
        }
    }
  return (
      <>
      <MyHook formData={formData} />
      </>
  );
}
ReactDOM.render(<Root />, document.getElementById('root'));