import { renderWithRedux } from 'utils'
import AgreementSubmitButton from '.'

describe('AgreementSubmitButton', () => {
  it('renders button with label Submit', () => {
    const renderer = renderWithRedux(<AgreementSubmitButton />)

    const element = renderer.root.findByType('input')
    expect(element.props.type).toBe('button')
    expect(element.props.value).toBe('Submit')
  })

  test.each`
    checkboxState | disabled | agreementState
    ${false}      | ${true}  | ${'not agreed'}
    ${true}       | ${false} | ${'agreed'}
  `(
    'render button with disabled=$disabled when agreement is $agreementState',
    ({ checkboxState, disabled }) => {
      const initialState = { checkboxes: { agree: checkboxState } }

      const renderer = renderWithRedux(<AgreementSubmitButton />, initialState)

      const element = renderer.root.findByType('input')
      expect(element.props.disabled).toBe(disabled)
    },
  )
})
