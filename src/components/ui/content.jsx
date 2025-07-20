"use client";

export default function Content({ children, className }) {

    return (
        <div className={className} style={{ marginTop: '52px' }}>
            { children }
        </div>
    );
}
