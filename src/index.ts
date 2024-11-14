/*
 * SPDX-FileCopyrightText: 2024 Philip Molares
 *
 * SPDX-License-Identifier: MIT
 */

const merlinRegexp = /[mM][eE][rR][lL][iI][nN]|[rR][uU][hH][rR][-_\s]*[sS][cC][hH][oO][lL][zZ]/

export const isMerlin = (input: string) : boolean => {
  return input.match(merlinRegexp) !== null
}
