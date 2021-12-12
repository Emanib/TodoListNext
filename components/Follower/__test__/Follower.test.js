/**
 * @jest-environment jsdom
 */
import Followers from '../Followers'
import { cleanup, render, screen } from "@testing-library/react";
import { mockData } from '../../../_mock_/mockFollower'
const MockedFollowerList = () => <Followers followers={mockData.data.results} />
it(" should render card", async function ()
{
    render(<MockedFollowerList />)
    const cardElement = await screen.findByTestId("follower-card-0")
    expect(cardElement).toBeInTheDocument()

})
