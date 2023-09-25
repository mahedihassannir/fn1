import { Link, useNavigate } from "react-router-dom";




import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";


const SellerRegisterForm = () => {

	const [captchaValue, SetCaptchaValue] = useState(null);

	function onChange(value) {
		console.log("Captcha value:", value);

		SetCaptchaValue(value)
	}


	// this is for the prevent on the load functionality 
	window.addEventListener("beforeunload", (e) => {
		if (window.location.pathname.startsWith("/seller_register/form")) {

			e.preventDefault();
			e.returnValue = "";

			return "Are you sure want to leave ?"
		};
	});
	// prevent ends


	return (
		<>
			< div className=' my-3 md:my-10 md:px-20 '>
				<div className='max-w-[400px]   mx-auto'>
					<h1 className='text-center text-3xl font-bold'>
						E-Com Seller{" "}
					</h1>

					<div className='w-full p-4 rounded border border-gray-500 mt-4'>
						<p className='text-2xl font-semibold'>Create account</p>

						{/* first and last name  */}
						<div className='mt-3'>
							<label
								htmlFor='name'
								className='font-semibold'
							>
								Your Name
							</label>
							<div>
								<input
									type='text'
									name=''
									id='name'
									className='w-full py-1 px-2 outline-none mt-1 border border-gray-400 rounded focus:shadow-[0px_0px_0px_2px_rgba(249,115,22,.5)] duration-200'
									placeholder='First and Last Name'
								/>
							</div>
						</div>
						{/* email  */}
						<div className='mt-3'>
							<label
								htmlFor='email'
								className='font-semibold'
							>
								Email
							</label>
							<div>
								<input
									type='email'
									name=''
									id='email'
									className='w-full py-1 px-2 outline-none mt-1 border border-gray-400 rounded focus:shadow-[0px_0px_0px_2px_rgba(249,115,22,.5)] duration-200'
								/>
							</div>
						</div>

						{/* password  */}
						<div className='mt-3'>
							<label
								htmlFor='password'
								className='font-semibold'
							>
								Password
							</label>
							<div>
								<input
									type='password'
									name=''
									id='password'
									className='w-full py-1 px-2 outline-none mt-1 border border-gray-400 rounded focus:shadow-[0px_0px_0px_2px_rgba(249,115,22,.5)] duration-200'
									placeholder='At least 6 characters'
								/>
								<div>
									<small>
										Passwords must be at least 6 characters.
									</small>
								</div>
							</div>
						</div>
						{/* Re-enter password  */}
						<div className='mt-3'>
							<label
								htmlFor='Re-enter-password'
								className='font-semibold'
							>
								Re-enter password
							</label>
							<div>
								<input
									type='password'
									name=''
									id='Re-enter-password'
									className='w-full py-1 px-2 outline-none mt-1 border border-gray-400 rounded focus:shadow-[0px_0px_0px_2px_rgba(249,115,22,.5)] duration-200'
									placeholder='At least 6 characters'
								/>
							</div>
						</div>
						{/* google recaptcha */}
						<div className='mt-3'>
							<ReCAPTCHA
								sitekey="6Lf68lAoAAAAAMILQYi3JdLblDkyIYKQ_nXk-kGd"
								onChange={onChange}
							/>

						</div>




						{/* submit btn  */}
						<div>
							<Link to={"/seller_register/personal_details"}>

								<abbr title={captchaValue === null ? "click and verify" : "verified done"}>

									<button disabled={!captchaValue} className={`py-2 w-full mt-4  rounded  font-bold ${captchaValue === null ? "bg-gray-500" : "bg-[#F97316]"}`}>
										Next
									</button>
								</abbr>


							</Link>
						</div>
					</div>
				</div>
			</ div >



		</>

	);
};

export default SellerRegisterForm;