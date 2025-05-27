import Input from "../../components/input";
import Button from "../../components/button";
import { useForm } from "react-hook-form";

export default function SignUp() {

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    return (
        <div className="bg-[#F5F8FF] min-h-screen flex justify-center items-center">
            <div className="sm:h-[475px] h-[450px] bg-white sm:w-[450px] w-[300px] shadow-xl/20 flex flex-col justify-around px-6 py-3">
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                    <p className="text-[#6B7280] text-center font-medium">Create an acccount to explore the website</p>
                </div>
                <div className="flex flex-col gap-3">
                    <Input
                        required={true}
                        {...register("name",
                            {
                                required: "Name is required",
                                minLength: { value: 3, message: "Name should be a minimum of 3 letters" }
                            })
                        }
                        placeholder="Enter name"
                        type="text"
                        className="sm:py-2 py-1 placeholder:text-lg"
                        error={errors.name?.message}
                    />
                    <Input
                        required={true}
                        {...register("email", { required: "Email is required" })}
                        placeholder="Enter email"
                        type="email"
                        className="sm:py-2 py-1 placeholder:text-lg"
                        error={errors.email?.message}
                    />
                    <Input
                        required={true}
                        {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password should be a minimum of 6 letters" }
                            }
                        )}
                        placeholder="Enter password"
                        type="text"
                        className="sm:py-2 py-1 placeholder:text-lg"
                        error={errors.password?.message}
                    />
                    <Button
                        className="bg-[#0057FF] sm:py-4 py-2"
                        onClick={handleSubmit((data) => {
                            alert(JSON.stringify(data));
                        })}
                    >Sign Up</Button>
                </div>
                <div className="flex justify-center gap-2">
                    <p className="text-md text-[#6B7280]">Already have an account?</p>
                    <a className="text-md font-medium text-[#0057FF]" href="/sign-in">SignIn</a>
                </div>
            </div>
        </div>
    )
}