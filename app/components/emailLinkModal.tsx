import { useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function EmailLinkModal({ open, onClose }: Props) {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    if (!open) return null;

    const handleSubmit = () => {
        if (!email) return;
        setSent(true);  // Directly set sent to true (no loading or API call)
    };

    return (
        <div className="fixed inset-0 z-51 flex items-center justify-center px-5">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
                {!sent ? (
                    <>
                        <h3 className="text-base xl:text-lg font-semibold text-black text-center">
                            Get the Mac App Store link
                        </h3>

                        <p className="mt-1 text-sm xl:text-base text-center">
                            Enter your email and we’ll send you the Mac App Store link.
                        </p>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-4 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />

                        <button
                            onClick={handleSubmit}
                            className="mt-4 w-full rounded-lg bg-cs-orange-100 px-3 py-2 text-sm font-semibold text-white hover:bg-cs-orange-50 transition-all duration-300"
                        >
                            Send link
                        </button>

                        <button
                            onClick={onClose}
                            className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-sm hover:text-black hover:bg-black/8 transition-all duration-300"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <h3 className="text-lg font-semibold text-neutral-900">
                            Check your inbox
                        </h3>

                        <p className="mt-2 text-sm text-neutral-600">
                            We’ve sent the Mac App Store link to:
                        </p>

                        <p className="mt-1 text-sm font-medium text-neutral-900">
                            {email}
                        </p>

                        <button
                            onClick={onClose}
                            className="mt-4 w-full rounded-lg bg-neutral-900 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                        >
                            Done
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
