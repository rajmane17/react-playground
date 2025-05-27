import { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";

export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // const [loading, setLoading] = useState<boolean>(true);

    return (
        <div className="bg-[#F5F8FF] min-h-screen flex justify-center items-center">
            <div className="h-[400px] bg-white sm:w-[500px] w-[300px] shadow-xl/20 flex flex-col justify-around px-6 py-3">
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-bold text-center">Sign In</h1>
                    <p className="text-[#6B7280] text-center font-medium">Explore the website now</p>
                </div>
                <div className="flex flex-col gap-3">
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
                        onClick={() => alert("button clicked")}
                    >Sign In</Button>
                </div>
                <div className="flex justify-center gap-2">
                    <p className="text-md text-[#6B7280]">Don't have an account?</p>
                    <a className="text-md font-medium text-[#0057FF]" href="/sign-up">SignUp</a>
                </div>
            </div>
        </div>
    )
}