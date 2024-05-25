import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AnimesContainer from '@/components/layout/AnimesContainer';
import MockProviders from '@/mocks/MockProviders';


describe('Home', () => {
    it('renders a heading', () => {
        render(<MockProviders>
            <AnimesContainer />
        </MockProviders>)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})