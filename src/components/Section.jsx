export default function Section({title, children, ...props}){
    return(
        <section {...props}> 
            <h2>
                {title}
            </h2>
            {children}
        </section>
    )
}
/**
 * The above <section {...props}> is used to accept the props coming from our custom component
 * and is spread to the <section> tag. If we don't use this, manually the props won't come to this tag.
 */