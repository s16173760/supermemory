export interface MemoryEntry {
	id: string
	content: string
	createdAt: string
	updatedAt: string
	spaceId?: string
	embedding?: number[]
	isStatic?: boolean
	isForgotten?: boolean
	forgetAfter?: string | null
	forgetReason?: string | null
	version?: number
	parentMemoryId?: string | null
	rootMemoryId?: string | null
	isLatest?: boolean
}

export interface DocumentWithMemories {
	id: string
	title: string | null
	url: string | null
	documentType: string
	createdAt: string
	updatedAt: string
	summary?: string | null
	memories: MemoryEntry[]
}

export interface DocumentsResponse {
	documents: DocumentWithMemories[]
	pagination: {
		currentPage: number
		limit: number
		totalItems: number
		totalPages: number
	}
}
