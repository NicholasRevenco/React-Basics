import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {


    const onSubmit = (data) => {
        console.log(data);
    }

    const schema = yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(6).max(15).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Full Name..." {...register("fullName")} />
                <p>{errors.fullName?.message}</p>
                <input type="text" placeholder="Email..." {...register("email")} />
                <input type="number" placeholder="Age..." {...register("age")} />
                <input type="password" placeholder="Password..." {...register("password")} />
                <p>{errors.confirmPassword?.message}</p>
                <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
                <input type="submit" />
            </form>
        </div>
    )
}