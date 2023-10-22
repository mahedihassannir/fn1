import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";




import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import UseSellerRegister from "../../../Hooks/SellerRegister/useSellerRegister";


const SellerRegisterForm = () => {



	const [captchaValue, SetCaptchaValue] = useState(null);

	const [passworderr, Setpassworderr] = useState("")


	const [fromdata, setdata] = useState(null);
	console.log(fromdata);

	const navigate = useNavigate();

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


	// getting value 

	const handleFromData = (e) => {

		e.preventDefault();
		const from = e.target;

		const name = from.name.value;
		const email = from.email.value;

		const password = from.password.value;

		const password2 = from.password2.value;

		if (password !== password2) {

			Setpassworderr("password not match")

			return
		}

		const fromDataobj = {
			name,
			email,
			password,
			password2,
			responseStatus: 200
		};

		setdata(fromDataobj)


		if (fromDataobj.responseStatus === 200) {

			navigate("/seller_register/personal_details", { state: { fromDataobj } })

		}
		else {

			return
		}



	};

	// getting value  ends




	return (
		<>
			< div className=' my-3 md:my-10 md:px-20 '>
				<div className='max-w-[400px]   mx-auto'>
					<h1 className='text-center text-3xl font-bold'>
						E-Com Seller{" "}
					</h1>

					<form onSubmit={handleFromData} className='w-full p-4 rounded border border-gray-500 mt-4'>

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
									name='name'
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
									name='email'
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
									name='password'
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
									name='password2'
									id='Re-enter-password'
									className='w-full py-1 px-2 outline-none mt-1 border border-gray-400 rounded focus:shadow-[0px_0px_0px_2px_rgba(249,115,22,.5)] duration-200'
									placeholder='At least 6 characters'
								/>
							</div>
						</div>
						<span className="text-red-500">
							{
								passworderr
							}
						</span>

						{/* google recaptcha */}
						<div className='mt-3'>
							<ReCAPTCHA
								sitekey="6Lf68lAoAAAAAMILQYi3JdLblDkyIYKQ_nXk-kGd"
								onChange={onChange}
							/>

						</div>




						{/* submit btn  */}
						<div>

							<abbr title={captchaValue === null ? "click and verify" : "verified done"}>

								<button type="submit" disabled={!captchaValue} className={`py-2 w-full mt-4  rounded  font-bold ${captchaValue === null ? "bg-gray-500" : "bg-[#F97316]"}`}>
									Next
								</button>
							</abbr>



						</div>
					</form>
				</div>
			</ div >



		</>

	);
};

export default SellerRegisterForm;