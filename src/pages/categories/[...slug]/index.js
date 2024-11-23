import { useRouter } from "next/router";

export default function Comments(){
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            <h1> Categorie page </h1>
            <p> Slug String:</p>
            <p> Slug:{JSON.stringify(slug)} </p>
        </div>
    );
}