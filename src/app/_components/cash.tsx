"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserContext } from "./userContext";
import { useContext } from "react";
import { useEffect } from "react";
import { FormEvent } from "react";
import { useUser } from "./useUser";

export default function Cash() {

    const router = useRouter();

    const onFill = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const code = Number(formData.get('code'));
    }

    // const context = useContext(UserContext);
    // const { username, loginTime, previousUser } = useContext(UserContext);

    const { username, loginTime} = useUser();

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // const loginTime = new Date().toLocaleTimeString();

    const handleClick = async (e: any) => {
        e.preventDefault();
        router.push('/');
    }

    const logout = () => {
        // setPreviousUser(username);
        router.push('/');
    }

    const handleClick2 = async (e: any) => {
        e.preventDefault();
        router.push('/products');
    }

    const handleCashOut = async (e: any) => {
        router.push('/');
        e.preventdefault();
    }

    const prod = async(code: any) => {
        // try {
        //     const response = await fetch(`http://localhost:3000/api/products/${code}`, {
        //         method: 'GET',
        //         headers: {'Content-Type': 'application/json'},
        //         // cache: "force-cache"
        //     });

        //     if(!response.ok){
        //         throw new Error("Not Okay")
        //     }

        //     const data = await response.json();
        //     console.log("Fetched products", data);

        // }catch(e: any){
        //     console.log(e.message);
        // }
    }

    // if(!context){
    //     return <div>Loading...</div>
    // }

    return (
        <div className="drop-shadow-[0_6px_6px_rgba(0.5,0.5,0.5,0.5)] border-slate-500 border-2 rounded-md m-5 p-5 bg-slate-600 grid grid-cols-2">
            <div className="border-slate-500 border-2 rounded-lg">
                <div className="text-center">
                    <Link href="/transactions" className="text-xl font-semibold hover:text-3xl hover:text-blue-400">Transaction Info</Link>
                </div>
                <div className="grid grid-rows-2 h-fit">
                    <div className="grid grid-cols-2">
                        <div className="m-5 grid grid-rows-7 gap-3 text-xl">
                            <h3>Date:</h3>
                            <h3>Item(s):</h3>
                            <h3>Cost:</h3>
                            <h3>Total:</h3>
                            <h3>Amount Paid:</h3>
                            <h3>Change:</h3>
                        </div>
                        <div className="m-5">
                            <form action="#" className="grid grid-rows-7">
                                <h1 className="my-2 rounded-md bg-slate-500 text-xl font-bold px-2 w-full">{formattedDate}</h1>
                                <h1 className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full">{}</h1>
                                <h1 className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full">{}</h1>
                                <h1 className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full">{}</h1>
                                <h1 className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full">{}</h1>
                                <h1 className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full">{}</h1>
                            </form>
                        </div>
                    </div>
                    <div className="m-5 border-2 border-slate-500 rounded-lg text-xl h-fill bg-slate-400 text-center">
                        <h1 className="text-center font-semibold">Cash Register</h1>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="border-2 border-black rounded-lg p-5 mx-5 my-12 text-3xl font-bold text-center bg-slate-500">Total:</div>
                            <div className="border-2 border-black rounded-lg p-5 mx-5 my-12 text-3xl font-bold text-center bg-slate-500">
                                <h1>M0</h1>
                            </div>
                        </div>
                        <button className="text-center text-3xl font-semibold border-2 border-dotted border-black rounded-2xl px-10 py-2 bg-green-400 hover:bg-green-200">Submit</button>
                    </div>
                    <div className="grid grid-cols-2 pb-2">
                        <button className="text-2xl text-center border-2 border-black rounded-lg mx-5 bg-white font-semibold hover:bg-blue-300 hover:text-3xl hover:text-blue-600">Reset</button>
                        <button onClick={logout} className="text-2xl text-center border-2 border-black rounded-lg mx-5 bg-red-700 font-bold hover:bg-red-500 hover:text-3xl hover:text-red-200">Logout</button>
                    </div>
                </div>
            </div>
            <div className="mx-2 grid grid-rows-2 gap-2">
                <div className=" border-slate-500 border-2 rounded-lg bg-gray-500">
                    <div className="text-center">
                        <Link href="/products" className="text-xl font-semibold hover:text-3xl hover:text-blue-400">Product Info</Link>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="m-5 grid grid-rows-6 gap-5 text-xl">
                            <h3>Code:</h3>
                            <h3>Item:</h3>
                            <h3>Category:</h3>
                            <h3>Cost:</h3>
                            <h3>Quantity:</h3>
                            <h3>Remaining:</h3>
                        </div>
                        <div className="m-5 grid grid-rows-6 text-xl">
                            <input id="codeInput" onChange={prod} type="number" name="code" title="code" className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full" autoFocus/>
                            <h1 className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full">{}</h1>
                            <h1 className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full">{}</h1>
                            <h1 className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full">{}</h1>
                            <h1 className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full">{}</h1>
                            <h1 className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full">{}</h1>
                        </div>
                    </div>
                </div>
                <div className=" border-slate-500 border-2 rounded-lg bg-slate-400">
                    <div className="text-center">
                        <Link href="/users" className="text-xl font-semibold hover:text-3xl hover:text-blue-500">Cashier Info</Link>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="m-5 grid grid-rows-4 gap-5 text-xl">
                            <h3>Username:</h3>
                            {/* <h3>Full Name:</h3> */}
                            <h3>Transactions processed:</h3>
                            <h3>Previous User:</h3>
                            <h3>Login Time:</h3>
                            {/* <h3>Duration:</h3> */}
                        </div>
                        <div className="m-5 grid grid-rows-4 gap-1">
                            <h1 className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full p-2">{username}</h1>
                            {/* <h1 className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full p-2">{}</h1> */}
                            <h1 className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full p-2">{0}</h1>
                            <h1 className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full p-2"></h1>
                            <h1 className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full p-2">{loginTime}</h1>
                            {/* <input type="text" className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full"/> */}
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={handleCashOut} className="border-2 border-black border-dotted bg-blue-400 rounded-md mt-2 p-1 px-3 text-3xl">Cash Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}