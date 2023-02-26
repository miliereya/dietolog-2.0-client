import { EditorProps } from 'draft-js'

interface TypeEditorPropsField extends EditorProps {
	placeholder: string
	error?: any
}

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
