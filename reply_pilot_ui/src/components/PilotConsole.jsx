import { CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";
import { generateResponse } from "../services/service";

const PilotConsole = () => {

    const [data, setData] = useState({
        requestContent: "",
        tone: ""
    })

    const [output, setOutput] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState({
        errors: {},
        isError: false
    })

    const replyOptions = [
        { value: "professional", label: "Professional Reply" },
        { value: "friendly", label: "Friendly Response" },
        { value: "apologetic", label: "Apologetic Tone" },
        { value: "follow-up", label: "Follow-up Message" },
        { value: "decline", label: "Polite Decline" },
        { value: "thank-you", label: "Thank You Note" },
    ]

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...setData, [name]: value })

        setError({
            errors: {},
            isError: false
        })
    }

    const handleGenerateReply = async (event) => {
        event.preventDefault();
        if (!data.requestContent.trim()) {
            setError({
                errors: { requestContent: "Please enter a message context." },
                isError: true
            });
            return;
        }
        setIsGenerating(true)

        console.log("Sending request with data:", data);
        try {
            const response = await generateResponse(data);
            console.log("Received response:", response);
            setOutput(response);
        } catch (error) {
            console.error("Error while generating reply:", error);
            setOutput("Something went wrong while generating the reply")
        } finally {
            setIsGenerating(false);
        }

    }

    const copyToClipboard = async () => {
        if (!output) return

        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 5000);
        } catch (error) {
            console.error("Failed to copy text: ", error);
        }

    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <form onSubmit={handleGenerateReply} className="space-y-6">

                    {/* Input field */}
                    <div>
                        <label htmlFor="input" className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Message Context
                        </label>
                        <textarea
                            id="requestContent"
                            name="requestContent"
                            autoComplete="off"
                            value={data.requestContent}
                            onChange={handleChange}
                            placeholder="Describe the message you received or the situation you need to respond to..."
                            className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none text-gray-700 placeholder-gray-400 transition-colors"
                        />
                    </div>
                    {error.isError && error.errors.requestContent && (
                        <p className="text-red-500 text-sm mt-1">{error.errors.requestContent}</p>
                    )}

                    {/* Tone selection */}
                    <div>
                        <label htmlFor="tone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Reply Type
                        </label>
                        <select
                            id="tone"
                            name="tone"
                            value={data.tone}
                            onChange={handleChange}
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-700 bg-white cursor-pointer transition-colors"
                        >
                            <option value="">-- Default (Professional Tone) --</option>
                            {replyOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={!data?.requestContent?.trim?.() || isGenerating}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {isGenerating ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Generating...</span>
                            </div>
                        ) : (
                            "Generate Reply"
                        )}
                    </button>

                </form>

                {/* Output Section */}
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="output" className="block text-sm font-semibold text-gray-700">
                                Generated Reply
                            </label>
                            {output && (
                                <button
                                    onClick={copyToClipboard}
                                    className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium text-gray-700"
                                >
                                    <Copy className="w-4 h-4" />
                                    <span>{copied ? "Copied!" : "Copy"}</span>
                                </button>
                            )}
                        </div>
                        <div className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl bg-gray-50 overflow-y-auto">
                            {output ? (
                                <p className="text-gray-700 leading-relaxed">{output}</p>
                            ) : (
                                <p className="text-gray-400 italic">Your generated reply will appear here...</p>
                            )}
                        </div>
                    </div>

                    {output && (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                            <div className="flex items-center space-x-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span className="text-green-800 font-medium">Reply generated successfully!</span>
                            </div>
                            <p className="text-green-700 text-sm mt-1">
                                Review the message and copy it when you're ready to use it.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default PilotConsole;