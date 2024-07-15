"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useFormState } from "react-dom";
import createUser from "./create-user";

export default function SignUp() {
	const [state, formAction] = useFormState(createUser, { error: "" });

	return (
		<form action={formAction} className="w-full max-w-xs">
			<Stack spacing={2}>
				<TextField name="email" label="Email" variant="outlined" type="email" />
				<TextField
					name="password"
					label="Password"
					variant="outlined"
					type="password"
				/>
				<Button type="submit" variant="contained">
					Sign Up
				</Button>
				<Link component={NextLink} href="/auth/login" className="self-center">
					Login
				</Link>
			</Stack>
		</form>
	);
}
