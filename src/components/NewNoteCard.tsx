import { ChangeEvent, FormEvent, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Mic, MicOff } from "lucide-react";
import { toast } from "sonner";

interface NewNoteCardProps {
	onNoteCreated: (content: string) => void;
}

let speechRecognition: SpeechRecognition | null;

function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
	const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
	const [content, setContent] = useState("");
	const [isRecording, setIsRecording] = useState(false);

	function handleStartEditor() {
		setShouldShowOnboarding(false);
	}

	function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
		setContent(event.target.value);

		if (event.target.value === "") {
			setShouldShowOnboarding(true);
		}
	}

	function handleSaveNote(event: FormEvent) {
		event.preventDefault();

		if (content === "") {
			return;
		}

		onNoteCreated(content);

		setContent("");

		setShouldShowOnboarding(true);

		toast.success(
			"Parabéns! Sua nota foi criada com Sucesso e está pronta para ser consultada."
		);
	}

	function handleStartRecording() {
		const isSpeechRecognitionAPIAvailable =
			"SpeechRecognition" in window ||
			"webkitSpeechRecognition" in window;

		if (!isSpeechRecognitionAPIAvailable) {
			alert("Infelizmente seu navegador não suporta a API de gravação!");

			return;
		}

		setIsRecording(true);

		setShouldShowOnboarding(false);

		const SpeechRecognitionAPI =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		speechRecognition = new SpeechRecognitionAPI();

		speechRecognition.lang = "pt-BR";

		// Só irá para de gravar quando clicar em parar a gravação.
		speechRecognition.continuous = true;
		speechRecognition.maxAlternatives = 1;

		// Irá fazendo a transcrição com forme formos falando e não só quando pararmos de falar, faz uma transcrição em tempo real.
		speechRecognition.interimResults = true;

		speechRecognition.onresult = (event) => {
			const transcription = Array.from(event.results).reduce(
				(text, result) => {
					return text.concat(result[0].transcript);
				},
				""
			);

			setContent(transcription);
		};

		speechRecognition.onerror = (event) => {
			console.error(event);
		};

		speechRecognition.start();
	}

	function handleStopRecording() {
		setIsRecording(false);

		if (speechRecognition !== null) {
			speechRecognition.stop();
		}
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 text-left p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
				<span className="text-sm font-medium text-slate-200">
					Adicionar nota
				</span>

				<p className="text-sm leading-6 text-slate-400">
					Grave uma nota em áudio que será convertida para texto
					automaticamente.
				</p>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="inset-0 fixed bg-black/50" />
				<Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
					<Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
						<X className="size-5" />
					</Dialog.Close>

					<form className="flex-1 flex flex-col">
						<div className="flex flex-1 flex-col gap-3 p-5">
							<span className="text-sm font-medium text-slate-300">
								Adicionar nota
							</span>

							{shouldShowOnboarding ? (
								<p className="text-sm leading-6 text-slate-400">
									Comece{" "}
									<button
										type="button"
										className="font-medium text-lime-400 hover:underline"
										onClick={handleStartRecording}>
										gravando uma nota
									</button>{" "}
									em áudio ou se preferir {""}
									<button
										type="button"
										onClick={handleStartEditor}
										className="font-medium text-lime-400 hover:underline">
										utilize apenas texto
									</button>
									.
								</p>
							) : (
								<textarea
									autoFocus
									onChange={handleContentChanged}
									value={content}
									className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
								/>
							)}
						</div>

						{isRecording ? (
							<div
								onClick={handleStopRecording}
								className="w-full flex items-center justify-center gap-2  bg-slate-900 py-4 text-center text-sm text-slate-300  outline-none font-medium">
								<span className="flex items-center gap-2">
									<Mic /> Gravando
									<div className="size-3 rounded-full bg-red-500 animate-pulse" />
								</span>
								-
								<span className="hover:text-red-500 flex items-center gap-2 cursor-pointer ">
									Parar Gravação <MicOff />
								</span>
							</div>
						) : (
							<button
								type="button"
								onClick={handleSaveNote}
								className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 hover:bg-lime-500 outline-none font-medium">
								Salvar nota
							</button>
						)}
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default NewNoteCard;
