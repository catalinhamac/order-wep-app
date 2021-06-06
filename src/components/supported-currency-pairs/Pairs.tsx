import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { SupportedCurrencyPairs } from '../../domain/SupportedCurrencyPairs';

export const testId = 'pairsTestId';
export const title = 'Currency Pairs to Trade'

interface Props {
    items: SupportedCurrencyPairs[]
}

export const Pairs = ({items}: Props) => {
    return (
        <div data-testid={testId}>
            <h1>{title}</h1>
            <List>
                {
                    items.map(({ccy1, ccy2}: SupportedCurrencyPairs, index: number) => (<ListItem key={index}>
                            <ListItemAvatar>
                            <Avatar>
                                <AttachMoneyIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`${ccy1}/${ccy2}`} />
                        </ListItem>
                    ))
                }
            </List>
            
        </div>
    )
}
