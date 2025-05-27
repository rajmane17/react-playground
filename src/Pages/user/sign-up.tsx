import { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";

export default function SignUp () {
        const [email, setEmail] = useState<string>("");
        const [password, setPassword] = useState<string>("");
        const [name, setName] = useState<string>("");

        function handleSignUp () {
            alert("button clicked");
        }

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
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        type="text"
                        className="sm:py-2 py-1 placeholder:text-lg"
                        value={name} />
                    <Input
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        type="email"
                        className="sm:py-2 py-1 placeholder:text-lg "
                        value={email} />
                    <Input
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        type="email"
                        className="sm:py-2 py-1 placeholder:text-lg"
                        value={password} />
                    <Button
                        className="bg-[#0057FF] sm:py-4 py-2"
                        onClick={() => handleSignUp}
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