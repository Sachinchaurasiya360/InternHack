
i
m
p
o
r
t
 
{
 
u
s
e
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
-
t
r
e
e
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
i
d
l
e
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
v
i
s
i
t
e
d
"
 
|
 
"
d
o
n
e
"
 
|
 
"
f
r
o
n
t
i
e
r
"
 
|
 
"
c
o
m
p
a
r
e
"
 
|
 
"
l
o
w
"
 
|
 
"
h
i
g
h
"
 
|
 
"
m
i
s
m
a
t
c
h
"
 
|
 
"
s
w
a
p
"
 
|
 
"
m
a
t
c
h
"
;




c
o
n
s
t
 
N
O
D
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
i
d
l
e
:
 
T
H
E
M
E
.
b
g
,


 
 
a
c
t
i
v
e
:
 
T
H
E
M
E
.
a
c
c
e
n
t
,


 
 
v
i
s
i
t
e
d
:
 
"
#
d
1
f
a
e
5
"
,


 
 
d
o
n
e
:
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
,


 
 
f
r
o
n
t
i
e
r
:
 
"
#
b
e
f
2
6
4
"
,


 
 
c
o
m
p
a
r
e
:
 
"
#
f
d
e
6
8
a
"
,


 
 
l
o
w
:
 
"
#
f
d
e
6
8
a
"
,


 
 
h
i
g
h
:
 
"
#
f
d
e
6
8
a
"
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
f
c
a
5
a
5
"
,


 
 
s
w
a
p
:
 
"
#
f
b
9
2
3
c
"
,


 
 
m
a
t
c
h
:
 
T
H
E
M
E
.
a
c
c
e
n
t
,


}
;


c
o
n
s
t
 
N
O
D
E
_
T
E
X
T
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
i
d
l
e
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
a
c
t
i
v
e
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
v
i
s
i
t
e
d
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
d
o
n
e
:
 
"
#
f
f
f
"
,


 
 
f
r
o
n
t
i
e
r
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
c
o
m
p
a
r
e
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
l
o
w
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
h
i
g
h
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
m
i
s
m
a
t
c
h
:
 
"
#
7
f
1
d
1
d
"
,


 
 
s
w
a
p
:
 
"
#
f
f
f
"
,


 
 
m
a
t
c
h
:
 
T
H
E
M
E
.
t
e
x
t
,


}
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
S
T
 
m
o
d
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
B
S
T
N
o
d
e
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;


 
 
l
e
f
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
r
i
g
h
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


}


t
y
p
e
 
B
S
T
 
=
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
B
S
T
N
o
d
e
>
;




l
e
t
 
N
E
X
T
_
I
D
 
=
 
1
;


f
u
n
c
t
i
o
n
 
m
a
k
e
N
o
d
e
(
v
:
 
n
u
m
b
e
r
)
:
 
B
S
T
N
o
d
e
 
{


 
 
r
e
t
u
r
n
 
{
 
i
d
:
 
`
n
$
{
N
E
X
T
_
I
D
+
+
}
`
,
 
v
a
l
u
e
:
 
v
,
 
l
e
f
t
:
 
n
u
l
l
,
 
r
i
g
h
t
:
 
n
u
l
l
 
}
;


}




f
u
n
c
t
i
o
n
 
c
l
o
n
e
T
r
e
e
(
t
:
 
B
S
T
)
:
 
B
S
T
 
{


 
 
c
o
n
s
t
 
o
u
t
:
 
B
S
T
 
=
 
{
}
;


 
 
O
b
j
e
c
t
.
v
a
l
u
e
s
(
t
)
.
f
o
r
E
a
c
h
(
(
n
)
 
=
>
 
{


 
 
 
 
o
u
t
[
n
.
i
d
]
 
=
 
{
 
.
.
.
n
 
}
;


 
 
}
)
;


 
 
r
e
t
u
r
n
 
o
u
t
;


}




f
u
n
c
t
i
o
n
 
p
a
t
h
S
t
a
t
e
s
(


 
 
p
a
t
h
:
 
s
t
r
i
n
g
[
]
,


 
 
c
u
r
I
d
:
 
s
t
r
i
n
g
,


 
 
c
u
r
S
t
:
 
C
e
l
l
S
t
a
t
e
,


)
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
C
e
l
l
S
t
a
t
e
>
 
{


 
 
c
o
n
s
t
 
o
u
t
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
C
e
l
l
S
t
a
t
e
>
 
=
 
{
}
;


 
 
p
a
t
h
.
f
o
r
E
a
c
h
(
(
p
)
 
=
>
 
{


 
 
 
 
i
f
 
(
p
 
!
=
=
 
c
u
r
I
d
)
 
o
u
t
[
p
]
 
=
 
"
v
i
s
i
t
e
d
"
;


 
 
}
)
;


 
 
o
u
t
[
c
u
r
I
d
]
 
=
 
c
u
r
S
t
;


 
 
r
e
t
u
r
n
 
o
u
t
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
S
T
 
o
p
e
r
a
t
i
o
n
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
F
r
a
m
e
 
{


 
 
k
i
n
d
:
 
s
t
r
i
n
g
;


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
t
r
e
e
:
 
B
S
T
;


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
n
o
d
e
S
t
a
t
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
C
e
l
l
S
t
a
t
e
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


}




f
u
n
c
t
i
o
n
 
b
s
t
I
n
s
e
r
t
(
t
r
e
e
:
 
B
S
T
,
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
,
 
v
:
 
n
u
m
b
e
r
,
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
p
a
t
h
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
l
e
t
 
c
u
r
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
r
o
o
t
I
d
;


 
 
w
h
i
l
e
 
(
c
u
r
I
d
 
!
=
=
 
n
u
l
l
)
 
{


 
 
 
 
p
a
t
h
.
p
u
s
h
(
c
u
r
I
d
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
c
o
m
p
a
r
e
"
,


 
 
 
 
 
 
l
i
n
e
:
 
2
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
p
a
t
h
S
t
a
t
e
s
(
p
a
t
h
,
 
c
u
r
I
d
,
 
"
c
o
m
p
a
r
e
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
m
p
a
r
e
 
$
{
v
}
 
w
i
t
h
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
,
 
a
t
:
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
v
 
=
=
=
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
d
u
p
"
,


 
 
 
 
 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
c
u
r
I
d
]
:
 
"
m
i
s
m
a
t
c
h
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
$
{
v
}
 
a
l
r
e
a
d
y
 
e
x
i
s
t
s
,
 
d
u
p
l
i
c
a
t
e
 
i
g
n
o
r
e
d
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
,
 
d
u
p
l
i
c
a
t
e
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
o
o
t
I
d
 
a
s
 
s
t
r
i
n
g
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
n
x
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=


 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
t
r
e
e
[
c
u
r
I
d
]
.
l
e
f
t
 
:
 
t
r
e
e
[
c
u
r
I
d
]
.
r
i
g
h
t
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
d
e
s
c
e
n
d
"
,


 
 
 
 
 
 
l
i
n
e
:
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
4
 
:
 
5
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
p
a
t
h
S
t
a
t
e
s
(


 
 
 
 
 
 
 
 
p
a
t
h
,


 
 
 
 
 
 
 
 
c
u
r
I
d
,


 
 
 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
"
l
o
w
"
 
:
 
"
h
i
g
h
"
,


 
 
 
 
 
 
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:


 
 
 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e


 
 
 
 
 
 
 
 
 
 
?
 
`
$
{
v
}
 
<
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
 
-
>
 
g
o
 
l
e
f
t
.
`


 
 
 
 
 
 
 
 
 
 
:
 
`
$
{
v
}
 
>
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
 
-
>
 
g
o
 
r
i
g
h
t
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
,
 
d
i
r
:
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
"
l
e
f
t
"
 
:
 
"
r
i
g
h
t
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
n
x
t
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
m
a
k
e
N
o
d
e
(
v
)
;


 
 
 
 
 
 
t
r
e
e
[
n
.
i
d
]
 
=
 
n
;


 
 
 
 
 
 
i
f
 
(
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
)
 
t
r
e
e
[
c
u
r
I
d
]
.
l
e
f
t
 
=
 
n
.
i
d
;


 
 
 
 
 
 
e
l
s
e
 
t
r
e
e
[
c
u
r
I
d
]
.
r
i
g
h
t
 
=
 
n
.
i
d
;


 
 
 
 
 
 
p
a
t
h
.
p
u
s
h
(
n
.
i
d
)
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
p
l
a
c
e
"
,


 
 
 
 
 
 
 
 
l
i
n
e
:
 
6
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
p
a
t
h
S
t
a
t
e
s
(
p
a
t
h
,
 
n
.
i
d
,
 
"
d
o
n
e
"
)
,
 
[
n
.
i
d
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
I
n
s
e
r
t
 
$
{
v
}
 
a
s
 
$
{


 
 
 
 
 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
"
l
e
f
t
"
 
:
 
"
r
i
g
h
t
"


 
 
 
 
 
 
 
 
}
 
c
h
i
l
d
 
o
f
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
,
 
p
l
a
c
e
d
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
o
o
t
I
d
 
a
s
 
s
t
r
i
n
g
;


 
 
 
 
}


 
 
 
 
c
u
r
I
d
 
=
 
n
x
t
;


 
 
}


 
 
c
o
n
s
t
 
n
 
=
 
m
a
k
e
N
o
d
e
(
v
)
;


 
 
t
r
e
e
[
n
.
i
d
]
 
=
 
n
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
p
l
a
c
e
"
,


 
 
 
 
l
i
n
e
:
 
1
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
:
 
n
.
i
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
n
.
i
d
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
T
r
e
e
 
e
m
p
t
y
,
 
$
{
v
}
 
b
e
c
o
m
e
s
 
r
o
o
t
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
:
 
v
,
 
p
l
a
c
e
d
:
 
"
y
e
s
"
 
}
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
n
.
i
d
;


}




f
u
n
c
t
i
o
n
 
b
s
t
S
e
a
r
c
h
(
t
r
e
e
:
 
B
S
T
,
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
,
 
v
:
 
n
u
m
b
e
r
,
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
)
 
{


 
 
c
o
n
s
t
 
p
a
t
h
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
l
e
t
 
c
u
r
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
r
o
o
t
I
d
;


 
 
w
h
i
l
e
 
(
c
u
r
I
d
 
!
=
=
 
n
u
l
l
)
 
{


 
 
 
 
p
a
t
h
.
p
u
s
h
(
c
u
r
I
d
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
c
o
m
p
a
r
e
"
,


 
 
 
 
 
 
l
i
n
e
:
 
2
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
p
a
t
h
S
t
a
t
e
s
(
p
a
t
h
,
 
c
u
r
I
d
,
 
"
c
o
m
p
a
r
e
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
m
p
a
r
e
 
$
{
v
}
 
w
i
t
h
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
:
 
v
,
 
a
t
:
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
v
 
=
=
=
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
f
o
u
n
d
"
,


 
 
 
 
 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
c
u
r
I
d
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
F
o
u
n
d
 
$
{
v
}
!
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
:
 
v
,
 
f
o
u
n
d
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
n
x
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=


 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
t
r
e
e
[
c
u
r
I
d
]
.
l
e
f
t
 
:
 
t
r
e
e
[
c
u
r
I
d
]
.
r
i
g
h
t
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
d
e
s
c
e
n
d
"
,


 
 
 
 
 
 
l
i
n
e
:
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
4
 
:
 
5
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
p
a
t
h
S
t
a
t
e
s
(


 
 
 
 
 
 
 
 
p
a
t
h
,


 
 
 
 
 
 
 
 
c
u
r
I
d
,


 
 
 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
"
l
o
w
"
 
:
 
"
h
i
g
h
"
,


 
 
 
 
 
 
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:


 
 
 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e


 
 
 
 
 
 
 
 
 
 
?
 
`
$
{
v
}
 
<
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
 
-
>
 
g
o
 
l
e
f
t
.
`


 
 
 
 
 
 
 
 
 
 
:
 
`
$
{
v
}
 
>
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
 
-
>
 
g
o
 
r
i
g
h
t
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
:
 
v
,
 
d
i
r
:
 
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
?
 
"
l
e
f
t
"
 
:
 
"
r
i
g
h
t
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
c
u
r
I
d
 
=
 
n
x
t
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
n
o
t
f
o
u
n
d
"
,


 
 
 
 
l
i
n
e
:
 
6
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
 
 
p
a
t
h
.
m
a
p
(
(
p
)
 
=
>
 
[
p
,
 
"
m
i
s
m
a
t
c
h
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
,


 
 
 
 
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
$
{
v
}
 
n
o
t
 
f
o
u
n
d
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
:
 
v
,
 
f
o
u
n
d
:
 
"
n
o
"
 
}
,


 
 
}
)
;


}




f
u
n
c
t
i
o
n
 
b
s
t
D
e
l
e
t
e
(


 
 
t
r
e
e
:
 
B
S
T
,


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
,


 
 
v
:
 
n
u
m
b
e
r
,


 
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
,


)
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
{


 
 
i
f
 
(
r
o
o
t
I
d
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
n
o
t
f
o
u
n
d
"
,


 
 
 
 
 
 
l
i
n
e
:
 
1
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
T
r
e
e
 
e
m
p
t
y
,
 
n
o
t
h
i
n
g
 
t
o
 
d
e
l
e
t
e
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
f
o
u
n
d
:
 
"
n
o
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
}


 
 
l
e
t
 
c
u
r
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
r
o
o
t
I
d
;


 
 
l
e
t
 
p
a
r
e
n
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
l
e
t
 
d
i
r
e
c
t
i
o
n
:
 
"
l
e
f
t
"
 
|
 
"
r
i
g
h
t
"
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
c
o
n
s
t
 
p
a
t
h
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
w
h
i
l
e
 
(
c
u
r
I
d
 
!
=
=
 
n
u
l
l
 
&
&
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
!
=
=
 
v
)
 
{


 
 
 
 
p
a
t
h
.
p
u
s
h
(
c
u
r
I
d
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
c
o
m
p
a
r
e
"
,


 
 
 
 
 
 
l
i
n
e
:
 
2
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
p
a
t
h
S
t
a
t
e
s
(
p
a
t
h
,
 
c
u
r
I
d
,
 
"
c
o
m
p
a
r
e
"
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
m
p
a
r
e
 
$
{
v
}
 
w
i
t
h
 
$
{
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
a
t
:
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
}
,


 
 
 
 
}
)
;


 
 
 
 
p
a
r
e
n
t
I
d
 
=
 
c
u
r
I
d
;


 
 
 
 
i
f
 
(
v
 
<
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
)
 
{


 
 
 
 
 
 
d
i
r
e
c
t
i
o
n
 
=
 
"
l
e
f
t
"
;


 
 
 
 
 
 
c
u
r
I
d
 
=
 
t
r
e
e
[
c
u
r
I
d
]
.
l
e
f
t
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
d
i
r
e
c
t
i
o
n
 
=
 
"
r
i
g
h
t
"
;


 
 
 
 
 
 
c
u
r
I
d
 
=
 
t
r
e
e
[
c
u
r
I
d
]
.
r
i
g
h
t
;


 
 
 
 
}


 
 
 
 
i
f
 
(
c
u
r
I
d
 
!
=
=
 
n
u
l
l
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
d
e
s
c
e
n
d
"
,


 
 
 
 
 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
p
a
t
h
S
t
a
t
e
s
(


 
 
 
 
 
 
 
 
 
 
p
a
t
h
,


 
 
 
 
 
 
 
 
 
 
p
a
r
e
n
t
I
d
!
,


 
 
 
 
 
 
 
 
 
 
v
 
<
 
t
r
e
e
[
p
a
r
e
n
t
I
d
!
]
.
v
a
l
u
e
 
?
 
"
l
o
w
"
 
:
 
"
h
i
g
h
"
,


 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
$
{
v
}
 
$
{
v
 
<
 
t
r
e
e
[
p
a
r
e
n
t
I
d
!
]
.
v
a
l
u
e
 
?
 
"
<
"
 
:
 
"
>
"
}
 
$
{


 
 
 
 
 
 
 
 
 
 
t
r
e
e
[
p
a
r
e
n
t
I
d
!
]
.
v
a
l
u
e


 
 
 
 
 
 
 
 
}
 
-
>
 
g
o
 
$
{
d
i
r
e
c
t
i
o
n
}
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
d
i
r
:
 
d
i
r
e
c
t
i
o
n
!
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
}


 
 
i
f
 
(
c
u
r
I
d
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
n
o
t
f
o
u
n
d
"
,


 
 
 
 
 
 
l
i
n
e
:
 
4
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
 
 
 
 
p
a
t
h
.
m
a
p
(
(
p
)
 
=
>
 
[
p
,
 
"
m
i
s
m
a
t
c
h
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
,


 
 
 
 
 
 
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
$
{
v
}
 
n
o
t
 
i
n
 
t
r
e
e
,
 
n
o
t
h
i
n
g
 
t
o
 
d
e
l
e
t
e
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
f
o
u
n
d
:
 
"
n
o
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
r
o
o
t
I
d
;


 
 
}


 
 
p
a
t
h
.
p
u
s
h
(
c
u
r
I
d
)
;


 
 
c
o
n
s
t
 
n
o
d
e
 
=
 
t
r
e
e
[
c
u
r
I
d
]
;




 
 
i
f
 
(
n
o
d
e
.
l
e
f
t
 
=
=
=
 
n
u
l
l
 
&
&
 
n
o
d
e
.
r
i
g
h
t
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
c
a
s
e
1
-
l
e
a
f
"
,


 
 
 
 
 
 
l
i
n
e
:
 
6
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
p
a
t
h
S
t
a
t
e
s
(
p
a
t
h
,
 
c
u
r
I
d
,
 
"
s
w
a
p
"
)
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
a
s
e
 
1
:
 
$
{
v
}
 
i
s
 
a
 
l
e
a
f
,
 
r
e
m
o
v
e
 
i
t
 
d
i
r
e
c
t
l
y
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
c
a
s
e
:
 
"
1
:
 
l
e
a
f
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
p
a
r
e
n
t
I
d
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
 
 
d
e
l
e
t
e
 
t
r
e
e
[
c
u
r
I
d
]
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
r
e
m
o
v
e
d
"
,


 
 
 
 
 
 
 
 
l
i
n
e
:
 
7
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
n
u
l
l
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
R
e
m
o
v
e
d
 
r
o
o
t
 
$
{
v
}
.
 
T
r
e
e
 
i
s
 
n
o
w
 
e
m
p
t
y
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
d
o
n
e
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
}


 
 
 
 
i
f
 
(
d
i
r
e
c
t
i
o
n
 
=
=
=
 
"
l
e
f
t
"
)
 
t
r
e
e
[
p
a
r
e
n
t
I
d
]
.
l
e
f
t
 
=
 
n
u
l
l
;


 
 
 
 
e
l
s
e
 
t
r
e
e
[
p
a
r
e
n
t
I
d
]
.
r
i
g
h
t
 
=
 
n
u
l
l
;


 
 
 
 
d
e
l
e
t
e
 
t
r
e
e
[
c
u
r
I
d
]
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
r
e
m
o
v
e
d
"
,


 
 
 
 
 
 
l
i
n
e
:
 
7
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
 
 
 
 
p
a
t
h
.
s
l
i
c
e
(
0
,
 
-
1
)
.
m
a
p
(
(
p
)
 
=
>
 
[
p
,
 
"
d
o
n
e
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
,


 
 
 
 
 
 
)
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
R
e
m
o
v
e
d
 
l
e
a
f
 
$
{
v
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
d
o
n
e
:
 
"
y
e
s
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
r
o
o
t
I
d
;


 
 
}




 
 
i
f
 
(
n
o
d
e
.
l
e
f
t
 
=
=
=
 
n
u
l
l
 
|
|
 
n
o
d
e
.
r
i
g
h
t
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
c
o
n
s
t
 
c
h
i
l
d
I
d
 
=
 
(
n
o
d
e
.
l
e
f
t
 
?
?
 
n
o
d
e
.
r
i
g
h
t
)
!
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
c
a
s
e
2
-
o
n
e
-
c
h
i
l
d
"
,


 
 
 
 
 
 
l
i
n
e
:
 
9
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
p
a
t
h
S
t
a
t
e
s
(
p
a
t
h
,
 
c
u
r
I
d
,
 
"
s
w
a
p
"
)
,
 
[
c
h
i
l
d
I
d
]
:
 
"
a
c
t
i
v
e
"
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
a
s
e
 
2
:
 
$
{
v
}
 
h
a
s
 
o
n
e
 
c
h
i
l
d
 
(
$
{
t
r
e
e
[
c
h
i
l
d
I
d
]
.
v
a
l
u
e
}
)
,
 
s
p
l
i
c
e
 
t
h
e
 
c
h
i
l
d
 
u
p
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
c
a
s
e
:
 
"
2
:
 
o
n
e
 
c
h
i
l
d
"
,
 
c
h
i
l
d
:
 
t
r
e
e
[
c
h
i
l
d
I
d
]
.
v
a
l
u
e
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
p
a
r
e
n
t
I
d
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
 
 
d
e
l
e
t
e
 
t
r
e
e
[
c
u
r
I
d
]
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
r
e
m
o
v
e
d
"
,


 
 
 
 
 
 
 
 
l
i
n
e
:
 
1
0
,


 
 
 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
 
 
r
o
o
t
I
d
:
 
c
h
i
l
d
I
d
,


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
c
h
i
l
d
I
d
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
R
e
m
o
v
e
d
 
$
{
v
}
.
 
$
{
t
r
e
e
[
c
h
i
l
d
I
d
]
.
v
a
l
u
e
}
 
i
s
 
t
h
e
 
n
e
w
 
r
o
o
t
.
`
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
d
o
n
e
:
 
"
y
e
s
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
c
h
i
l
d
I
d
;


 
 
 
 
}


 
 
 
 
i
f
 
(
d
i
r
e
c
t
i
o
n
 
=
=
=
 
"
l
e
f
t
"
)
 
t
r
e
e
[
p
a
r
e
n
t
I
d
]
.
l
e
f
t
 
=
 
c
h
i
l
d
I
d
;


 
 
 
 
e
l
s
e
 
t
r
e
e
[
p
a
r
e
n
t
I
d
]
.
r
i
g
h
t
 
=
 
c
h
i
l
d
I
d
;


 
 
 
 
d
e
l
e
t
e
 
t
r
e
e
[
c
u
r
I
d
]
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
r
e
m
o
v
e
d
"
,


 
 
 
 
 
 
l
i
n
e
:
 
1
0
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{


 
 
 
 
 
 
 
 
[
c
h
i
l
d
I
d
]
:
 
"
d
o
n
e
"
,


 
 
 
 
 
 
 
 
.
.
.
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
 
 
 
 
 
 
p
a
t
h
.
s
l
i
c
e
(
0
,
 
-
1
)
.
m
a
p
(
(
p
)
 
=
>
 
[
p
,
 
"
v
i
s
i
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
,


 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
R
e
m
o
v
e
d
 
$
{
v
}
.
 
C
h
i
l
d
 
$
{
t
r
e
e
[
c
h
i
l
d
I
d
]
.
v
a
l
u
e
}
 
t
o
o
k
 
i
t
s
 
p
l
a
c
e
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
d
o
n
e
:
 
"
y
e
s
"
 
}
,


 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
r
o
o
t
I
d
;


 
 
}




 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
c
a
s
e
3
-
t
w
o
-
c
h
i
l
d
r
e
n
"
,


 
 
 
 
l
i
n
e
:
 
1
2
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
p
a
t
h
S
t
a
t
e
s
(
p
a
t
h
,
 
c
u
r
I
d
,
 
"
s
w
a
p
"
)
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
a
s
e
 
3
:
 
$
{
v
}
 
h
a
s
 
t
w
o
 
c
h
i
l
d
r
e
n
,
 
f
i
n
d
 
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
 
(
s
m
a
l
l
e
s
t
 
i
n
 
r
i
g
h
t
 
s
u
b
t
r
e
e
)
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
c
a
s
e
:
 
"
3
:
 
t
w
o
 
c
h
i
l
d
r
e
n
"
 
}
,


 
 
}
)
;


 
 
l
e
t
 
s
u
c
c
P
a
r
e
n
t
I
d
 
=
 
c
u
r
I
d
;


 
 
l
e
t
 
s
u
c
c
I
d
:
 
s
t
r
i
n
g
 
=
 
n
o
d
e
.
r
i
g
h
t
!
;


 
 
c
o
n
s
t
 
s
u
c
c
P
a
t
h
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
s
u
c
c
-
s
t
a
r
t
"
,


 
 
 
 
l
i
n
e
:
 
1
3
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
c
u
r
I
d
]
:
 
"
s
w
a
p
"
,
 
[
s
u
c
c
I
d
]
:
 
"
f
r
o
n
t
i
e
r
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
t
e
p
 
i
n
t
o
 
r
i
g
h
t
 
s
u
b
t
r
e
e
 
a
t
 
$
{
t
r
e
e
[
s
u
c
c
I
d
]
.
v
a
l
u
e
}
,
 
t
h
e
n
 
k
e
e
p
 
g
o
i
n
g
 
l
e
f
t
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
s
u
c
c
:
 
t
r
e
e
[
s
u
c
c
I
d
]
.
v
a
l
u
e
 
}
,


 
 
}
)
;


 
 
w
h
i
l
e
 
(
t
r
e
e
[
s
u
c
c
I
d
]
.
l
e
f
t
 
!
=
=
 
n
u
l
l
)
 
{


 
 
 
 
s
u
c
c
P
a
r
e
n
t
I
d
 
=
 
s
u
c
c
I
d
;


 
 
 
 
s
u
c
c
P
a
t
h
.
p
u
s
h
(
s
u
c
c
I
d
)
;


 
 
 
 
s
u
c
c
I
d
 
=
 
t
r
e
e
[
s
u
c
c
I
d
]
.
l
e
f
t
!
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
k
i
n
d
:
 
"
s
u
c
c
-
w
a
l
k
"
,


 
 
 
 
 
 
l
i
n
e
:
 
1
3
,


 
 
 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{


 
 
 
 
 
 
 
 
[
c
u
r
I
d
]
:
 
"
s
w
a
p
"
,


 
 
 
 
 
 
 
 
.
.
.
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
s
u
c
c
P
a
t
h
.
m
a
p
(
(
p
)
 
=
>
 
[
p
,
 
"
v
i
s
i
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
)
,


 
 
 
 
 
 
 
 
[
s
u
c
c
I
d
]
:
 
"
f
r
o
n
t
i
e
r
"
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
t
e
p
 
l
e
f
t
 
t
o
 
$
{
t
r
e
e
[
s
u
c
c
I
d
]
.
v
a
l
u
e
}
.
`
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
s
u
c
c
:
 
t
r
e
e
[
s
u
c
c
I
d
]
.
v
a
l
u
e
 
}
,


 
 
 
 
}
)
;


 
 
}


 
 
c
o
n
s
t
 
s
u
c
c
V
a
l
 
=
 
t
r
e
e
[
s
u
c
c
I
d
]
.
v
a
l
u
e
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
s
u
c
c
-
f
o
u
n
d
"
,


 
 
 
 
l
i
n
e
:
 
1
4
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
c
u
r
I
d
]
:
 
"
s
w
a
p
"
,
 
[
s
u
c
c
I
d
]
:
 
"
m
a
t
c
h
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
I
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
 
=
 
$
{
s
u
c
c
V
a
l
}
.
 
I
t
 
h
a
s
 
n
o
 
l
e
f
t
 
c
h
i
l
d
 
b
y
 
c
o
n
s
t
r
u
c
t
i
o
n
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
s
u
c
c
:
 
s
u
c
c
V
a
l
 
}
,


 
 
}
)
;


 
 
t
r
e
e
[
c
u
r
I
d
]
.
v
a
l
u
e
 
=
 
s
u
c
c
V
a
l
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
s
u
c
c
-
c
o
p
y
"
,


 
 
 
 
l
i
n
e
:
 
1
5
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
c
u
r
I
d
]
:
 
"
m
a
t
c
h
"
,
 
[
s
u
c
c
I
d
]
:
 
"
s
w
a
p
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
p
y
 
$
{
s
u
c
c
V
a
l
}
 
i
n
t
o
 
t
h
e
 
t
a
r
g
e
t
 
n
o
d
e
.
 
N
o
w
 
d
e
l
e
t
e
 
t
h
e
 
s
u
c
c
e
s
s
o
r
 
(
w
h
i
c
h
 
h
a
s
 
<
=
 
1
 
c
h
i
l
d
)
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
c
o
p
i
e
d
:
 
s
u
c
c
V
a
l
 
}
,


 
 
}
)
;


 
 
c
o
n
s
t
 
s
u
c
c
R
i
g
h
t
 
=
 
t
r
e
e
[
s
u
c
c
I
d
]
.
r
i
g
h
t
;


 
 
i
f
 
(
s
u
c
c
P
a
r
e
n
t
I
d
 
=
=
=
 
c
u
r
I
d
)
 
{


 
 
 
 
t
r
e
e
[
c
u
r
I
d
]
.
r
i
g
h
t
 
=
 
s
u
c
c
R
i
g
h
t
;


 
 
}
 
e
l
s
e
 
{


 
 
 
 
t
r
e
e
[
s
u
c
c
P
a
r
e
n
t
I
d
]
.
l
e
f
t
 
=
 
s
u
c
c
R
i
g
h
t
;


 
 
}


 
 
d
e
l
e
t
e
 
t
r
e
e
[
s
u
c
c
I
d
]
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
r
e
m
o
v
e
d
"
,


 
 
 
 
l
i
n
e
:
 
1
6
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
[
c
u
r
I
d
]
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
R
e
m
o
v
e
d
 
t
h
e
 
s
u
c
c
e
s
s
o
r
 
n
o
d
e
.
 
B
S
T
 
i
n
v
a
r
i
a
n
t
 
p
r
e
s
e
r
v
e
d
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
v
,
 
d
o
n
e
:
 
"
y
e
s
"
 
}
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
r
o
o
t
I
d
;


}




c
o
n
s
t
 
I
N
S
E
R
T
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
(
r
o
o
t
,
 
v
)
:
"
,


 
 
"
 
 
i
f
 
r
o
o
t
 
i
s
 
n
u
l
l
:
 
r
e
t
u
r
n
 
N
o
d
e
(
v
)
"
,


 
 
"
 
 
i
f
 
v
 
=
=
 
r
o
o
t
.
v
a
l
u
e
:
 
r
e
t
u
r
n
 
r
o
o
t
"
,


 
 
"
 
 
#
 
d
u
p
l
i
c
a
t
e
,
 
B
S
T
s
 
d
i
s
a
l
l
o
w
"
,


 
 
"
 
 
i
f
 
v
 
<
 
r
o
o
t
.
v
a
l
u
e
:
 
r
o
o
t
.
l
e
f
t
 
<
-
 
i
n
s
e
r
t
(
r
o
o
t
.
l
e
f
t
,
 
v
)
"
,


 
 
"
 
 
e
l
s
e
:
 
r
o
o
t
.
r
i
g
h
t
 
<
-
 
i
n
s
e
r
t
(
r
o
o
t
.
r
i
g
h
t
,
 
v
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
r
o
o
t
"
,


]
;




c
o
n
s
t
 
S
E
A
R
C
H
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
s
e
a
r
c
h
(
r
o
o
t
,
 
v
)
:
"
,


 
 
"
 
 
i
f
 
r
o
o
t
 
i
s
 
n
u
l
l
:
 
r
e
t
u
r
n
 
f
a
l
s
e
"
,


 
 
"
 
 
i
f
 
v
 
=
=
 
r
o
o
t
.
v
a
l
u
e
:
 
r
e
t
u
r
n
 
t
r
u
e
"
,


 
 
"
 
 
#
 
f
o
u
n
d
"
,


 
 
"
 
 
i
f
 
v
 
<
 
r
o
o
t
.
v
a
l
u
e
:
 
r
e
t
u
r
n
 
s
e
a
r
c
h
(
r
o
o
t
.
l
e
f
t
,
 
v
)
"
,


 
 
"
 
 
e
l
s
e
:
 
r
e
t
u
r
n
 
s
e
a
r
c
h
(
r
o
o
t
.
r
i
g
h
t
,
 
v
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
f
a
l
s
e
"
,


]
;




c
o
n
s
t
 
D
E
L
E
T
E
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
d
e
l
e
t
e
(
r
o
o
t
,
 
v
)
:
"
,


 
 
"
 
 
i
f
 
r
o
o
t
 
i
s
 
n
u
l
l
:
 
r
e
t
u
r
n
 
n
u
l
l
"
,


 
 
"
 
 
w
a
l
k
 
d
o
w
n
 
c
o
m
p
a
r
i
n
g
 
v
 
w
i
t
h
 
r
o
o
t
.
v
a
l
u
e
"
,


 
 
"
 
 
f
o
l
l
o
w
 
l
e
f
t
/
r
i
g
h
t
 
c
h
i
l
d
 
u
n
t
i
l
 
v
 
f
o
u
n
d
"
,


 
 
"
 
 
i
f
 
n
o
t
 
f
o
u
n
d
:
 
r
e
t
u
r
n
 
r
o
o
t
 
u
n
c
h
a
n
g
e
d
"
,


 
 
"
 
 
#
 
n
o
d
e
 
f
o
u
n
d
,
 
d
i
s
p
a
t
c
h
 
o
n
 
n
u
m
b
e
r
 
o
f
 
c
h
i
l
d
r
e
n
"
,


 
 
"
 
 
C
a
s
e
 
1
,
 
l
e
a
f
:
 
d
e
t
a
c
h
 
f
r
o
m
 
p
a
r
e
n
t
"
,


 
 
"
 
 
r
e
t
u
r
n
 
u
p
d
a
t
e
d
 
t
r
e
e
"
,


 
 
"
 
 
#
 
o
n
e
-
c
h
i
l
d
 
c
a
s
e
"
,


 
 
"
 
 
C
a
s
e
 
2
,
 
o
n
e
 
c
h
i
l
d
:
 
p
a
r
e
n
t
 
-
>
 
c
h
i
l
d
 
(
s
p
l
i
c
e
 
u
p
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
u
p
d
a
t
e
d
 
t
r
e
e
"
,


 
 
"
 
 
#
 
t
w
o
-
c
h
i
l
d
r
e
n
 
c
a
s
e
"
,


 
 
"
 
 
C
a
s
e
 
3
,
 
t
w
o
 
c
h
i
l
d
r
e
n
:
 
f
i
n
d
 
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
"
,


 
 
"
 
 
 
 
w
a
l
k
 
r
i
g
h
t
 
o
n
c
e
,
 
t
h
e
n
 
l
e
f
t
 
u
n
t
i
l
 
n
u
l
l
"
,


 
 
"
 
 
 
 
s
u
c
c
e
s
s
o
r
 
v
a
l
u
e
 
f
o
u
n
d
"
,


 
 
"
 
 
 
 
c
o
p
y
 
s
u
c
c
e
s
s
o
r
'
s
 
v
a
l
u
e
 
i
n
t
o
 
t
a
r
g
e
t
 
n
o
d
e
"
,


 
 
"
 
 
 
 
d
e
l
e
t
e
 
t
h
e
 
s
u
c
c
e
s
s
o
r
 
(
r
e
c
u
r
s
e
s
 
i
n
t
o
 
C
a
s
e
 
1
 
o
r
 
2
)
"
,


]
;




f
u
n
c
t
i
o
n
 
p
a
r
s
e
A
r
r
(
s
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
p
a
r
t
s
 
=
 
s


 
 
 
 
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)


 
 
 
 
.
m
a
p
(
(
x
)
 
=
>
 
x
.
t
r
i
m
(
)
)


 
 
 
 
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
p
a
r
t
s
.
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
)
)
;


 
 
i
f
 
(
n
u
m
s
.
s
o
m
e
(
(
n
)
 
=
>
 
N
u
m
b
e
r
.
i
s
N
a
N
(
n
)
)
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
n
u
m
s
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
I
n
s
e
r
t
F
r
a
m
e
s
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
)
:
 
F
r
a
m
e
[
]
 
{


 
 
N
E
X
T
_
I
D
 
=
 
1
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
t
r
e
e
:
 
B
S
T
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
s
t
a
r
t
"
,


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
t
r
e
e
:
 
{
}
,


 
 
 
 
r
o
o
t
I
d
:
 
n
u
l
l
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
t
a
r
t
 
w
i
t
h
 
e
m
p
t
y
 
B
S
T
.
 
I
n
s
e
r
t
i
n
g
:
 
[
$
{
v
a
l
u
e
s
.
j
o
i
n
(
"
,
 
"
)
}
]
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
p
e
n
d
i
n
g
:
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
v
a
l
u
e
s
)
 
{


 
 
 
 
r
o
o
t
I
d
 
=
 
b
s
t
I
n
s
e
r
t
(
t
r
e
e
,
 
r
o
o
t
I
d
,
 
v
,
 
f
r
a
m
e
s
)
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
d
o
n
e
"
,


 
 
 
 
l
i
n
e
:
 
6
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
 
 
O
b
j
e
c
t
.
k
e
y
s
(
t
r
e
e
)
.
m
a
p
(
(
k
)
 
=
>
 
[
k
,
 
"
d
o
n
e
"
 
a
s
 
C
e
l
l
S
t
a
t
e
]
)
,


 
 
 
 
)
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
A
l
l
 
v
a
l
u
e
s
 
i
n
s
e
r
t
e
d
.
 
B
S
T
 
c
o
m
p
l
e
t
e
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
i
n
s
e
r
t
e
d
:
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
}
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
S
e
a
r
c
h
F
r
a
m
e
s
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
N
E
X
T
_
I
D
 
=
 
1
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
t
r
e
e
:
 
B
S
T
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
v
a
l
u
e
s
)
 
r
o
o
t
I
d
 
=
 
b
s
t
I
n
s
e
r
t
(
t
r
e
e
,
 
r
o
o
t
I
d
,
 
v
,
 
[
]
)
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
s
t
a
r
t
"
,


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
e
a
r
c
h
 
f
o
r
 
$
{
t
a
r
g
e
t
}
 
s
t
a
r
t
i
n
g
 
a
t
 
r
o
o
t
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
 
}
,


 
 
}
)
;


 
 
b
s
t
S
e
a
r
c
h
(
t
r
e
e
,
 
r
o
o
t
I
d
,
 
t
a
r
g
e
t
,
 
f
r
a
m
e
s
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
D
e
l
e
t
e
F
r
a
m
e
s
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
N
E
X
T
_
I
D
 
=
 
1
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
t
r
e
e
:
 
B
S
T
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
v
a
l
u
e
s
)
 
r
o
o
t
I
d
 
=
 
b
s
t
I
n
s
e
r
t
(
t
r
e
e
,
 
r
o
o
t
I
d
,
 
v
,
 
[
]
)
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
k
i
n
d
:
 
"
s
t
a
r
t
"
,


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
t
r
e
e
:
 
c
l
o
n
e
T
r
e
e
(
t
r
e
e
)
,


 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
B
u
i
l
t
 
B
S
T
 
f
r
o
m
 
[
$
{
v
a
l
u
e
s
.
j
o
i
n
(
"
,
 
"
)
}
]
.
 
N
o
w
 
d
e
l
e
t
e
 
$
{
t
a
r
g
e
t
}
.
`
,


 
 
 
 
v
a
r
s
:
 
{
 
d
e
l
e
t
e
:
 
t
a
r
g
e
t
 
}
,


 
 
}
)
;


 
 
b
s
t
D
e
l
e
t
e
(
t
r
e
e
,
 
r
o
o
t
I
d
,
 
t
a
r
g
e
t
,
 
f
r
a
m
e
s
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
t
r
e
e
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
c
o
m
p
u
t
e
L
a
y
o
u
t
(
n
o
d
e
s
:
 
B
S
T
,
 
r
o
o
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
)
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
{


 
 
c
o
n
s
t
 
p
o
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
l
e
t
 
c
o
l
 
=
 
0
;


 
 
f
u
n
c
t
i
o
n
 
w
a
l
k
(
i
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
,
 
d
e
p
t
h
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
i
f
 
(
!
i
d
 
|
|
 
!
n
o
d
e
s
[
i
d
]
)
 
r
e
t
u
r
n
;


 
 
 
 
w
a
l
k
(
n
o
d
e
s
[
i
d
]
.
l
e
f
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
 
 
p
o
s
[
i
d
]
 
=
 
{
 
x
:
 
c
o
l
+
+
,
 
y
:
 
d
e
p
t
h
 
}
;


 
 
 
 
w
a
l
k
(
n
o
d
e
s
[
i
d
]
.
r
i
g
h
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
}


 
 
w
a
l
k
(
r
o
o
t
,
 
0
)
;


 
 
r
e
t
u
r
n
 
p
o
s
;


}




f
u
n
c
t
i
o
n
 
B
S
T
V
i
z
(
{


 
 
t
r
e
e
,


 
 
r
o
o
t
I
d
,


 
 
n
o
d
e
S
t
a
t
e
s
,


 
 
w
i
d
t
h
 
=
 
5
6
0
,


 
 
h
e
i
g
h
t
 
=
 
3
2
0
,


}
:
 
{


 
 
t
r
e
e
:
 
B
S
T
;


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
n
o
d
e
S
t
a
t
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
C
e
l
l
S
t
a
t
e
>
;


 
 
w
i
d
t
h
?
:
 
n
u
m
b
e
r
;


 
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
p
o
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
c
o
m
p
u
t
e
L
a
y
o
u
t
(
t
r
e
e
,
 
r
o
o
t
I
d
)
,
 
[
t
r
e
e
,
 
r
o
o
t
I
d
]
)
;


 
 
c
o
n
s
t
 
n
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
p
o
s
)
.
l
e
n
g
t
h
;


 
 
i
f
 
(
n
 
=
=
=
 
0
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
w
i
d
t
h
}
 
h
e
i
g
h
t
=
{
6
0
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
w
i
d
t
h
}
 
6
0
`
}
>


 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
x
=
{
w
i
d
t
h
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
y
=
{
3
5
}


 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
3
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
(
e
m
p
t
y
 
t
r
e
e
)


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
)
;


 
 
}


 
 
c
o
n
s
t
 
P
A
D
 
=
 
3
0
;


 
 
c
o
n
s
t
 
x
S
c
a
l
e
 
=
 
n
 
>
 
1
 
?
 
(
w
i
d
t
h
 
-
 
P
A
D
 
*
 
2
)
 
/
 
(
n
 
-
 
1
)
 
:
 
0
;


 
 
c
o
n
s
t
 
m
a
x
D
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
.
.
.
O
b
j
e
c
t
.
v
a
l
u
e
s
(
p
o
s
)
.
m
a
p
(
(
p
)
 
=
>
 
p
.
y
)
)
;


 
 
c
o
n
s
t
 
y
S
c
a
l
e
 
=
 
m
a
x
D
 
>
 
0
 
?
 
(
h
e
i
g
h
t
 
-
 
P
A
D
 
*
 
2
 
-
 
2
0
)
 
/
 
m
a
x
D
 
:
 
0
;


 
 
c
o
n
s
t
 
R
 
=
 
1
8
;


 
 
c
o
n
s
t
 
p
x
 
=
 
(
i
d
:
 
s
t
r
i
n
g
)
 
=
>
 
P
A
D
 
+
 
p
o
s
[
i
d
]
.
x
 
*
 
x
S
c
a
l
e
;


 
 
c
o
n
s
t
 
p
y
 
=
 
(
i
d
:
 
s
t
r
i
n
g
)
 
=
>
 
P
A
D
 
+
 
p
o
s
[
i
d
]
.
y
 
*
 
y
S
c
a
l
e
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
t
r
e
e
)
.
f
i
l
t
e
r
(
(
i
d
)
 
=
>
 
p
o
s
[
i
d
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
v
g


 
 
 
 
 
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
w
i
d
t
h
}
 
$
{
h
e
i
g
h
t
}
`
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
m
a
x
H
e
i
g
h
t
:
 
h
e
i
g
h
t
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
d
 
=
 
t
r
e
e
[
i
d
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
[
n
d
.
l
e
f
t
,
 
n
d
.
r
i
g
h
t
]
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
 
a
s
 
s
t
r
i
n
g
[
]


 
 
 
 
 
 
 
 
)
.
f
i
l
t
e
r
(
(
c
i
d
)
 
=
>
 
p
o
s
[
c
i
d
]
)
.
m
a
p
(
(
c
i
d
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
i
d
}
-
$
{
c
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
p
y
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
x
(
c
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
p
y
(
c
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
8
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
e
 
=
 
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
i
d
l
e
"
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
p
y
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
N
O
D
E
_
C
O
L
O
R
[
s
t
a
t
e
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
 
=
=
=
 
"
a
c
t
i
v
e
"
 
|
|
 
s
t
a
t
e
 
=
=
=
 
"
m
a
t
c
h
"
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
s
t
a
t
e
 
=
=
=
 
"
a
c
t
i
v
e
"
 
|
|
 
s
t
a
t
e
 
=
=
=
 
"
m
a
t
c
h
"
 
?
 
2
.
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
x
(
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
y
(
i
d
)
 
+
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
N
O
D
E
_
T
E
X
T
_
C
O
L
O
R
[
s
t
a
t
e
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
e
e
[
i
d
]
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
M
o
d
e
 
=
 
"
i
n
s
e
r
t
"
 
|
 
"
s
e
a
r
c
h
"
 
|
 
"
d
e
l
e
t
e
"
;




c
o
n
s
t
 
P
R
E
S
E
T
S
_
F
O
R
:
 
R
e
c
o
r
d
<
M
o
d
e
,
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
v
a
l
u
e
:
 
s
t
r
i
n
g
 
}
[
]
>
 
=
 
{


 
 
i
n
s
e
r
t
:
 
[


 
 
 
 
{
 
l
a
b
e
l
:
 
"
B
a
l
a
n
c
e
d
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
,
 
6
0
,
 
8
0
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
o
r
t
e
d
 
(
s
k
e
w
e
d
)
"
,
 
v
a
l
u
e
:
 
"
1
0
,
 
2
0
,
 
3
0
,
 
4
0
,
 
5
0
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
R
a
n
d
o
m
"
,
 
v
a
l
u
e
:
 
"
4
2
,
 
1
5
,
 
7
8
,
 
8
,
 
2
3
,
 
5
5
,
 
9
1
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
m
a
l
l
"
,
 
v
a
l
u
e
:
 
"
5
,
 
3
,
 
7
"
 
}
,


 
 
]
,


 
 
s
e
a
r
c
h
:
 
[


 
 
 
 
{
 
l
a
b
e
l
:
 
"
B
a
l
a
n
c
e
d
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
,
 
6
0
,
 
8
0
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
o
r
t
e
d
 
(
s
k
e
w
e
d
)
"
,
 
v
a
l
u
e
:
 
"
1
0
,
 
2
0
,
 
3
0
,
 
4
0
,
 
5
0
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
R
a
n
d
o
m
"
,
 
v
a
l
u
e
:
 
"
4
2
,
 
1
5
,
 
7
8
,
 
8
,
 
2
3
,
 
5
5
,
 
9
1
"
 
}
,


 
 
]
,


 
 
d
e
l
e
t
e
:
 
[


 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
a
s
e
 
1
 
(
l
e
a
f
)
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
,
 
6
0
,
 
8
0
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
a
s
e
 
2
 
(
o
n
e
 
c
h
i
l
d
)
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
3
0
,
 
7
0
,
 
6
0
,
 
8
0
,
 
9
0
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
a
s
e
 
3
 
(
t
w
o
 
c
h
i
l
d
r
e
n
)
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
,
 
6
0
,
 
8
0
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
D
e
l
e
t
e
 
r
o
o
t
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
"
 
}
,


 
 
]
,


}
;




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
]
 
=
 
u
s
e
S
t
a
t
e
<
M
o
d
e
>
(
"
i
n
s
e
r
t
"
)
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
,
 
s
e
t
I
n
p
u
t
]
 
=
 
u
s
e
S
t
a
t
e
(
"
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
,
 
6
0
,
 
8
0
"
)
;


 
 
c
o
n
s
t
 
[
t
a
r
g
e
t
,
 
s
e
t
T
a
r
g
e
t
]
 
=
 
u
s
e
S
t
a
t
e
(
4
0
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
u
s
e
M
e
m
o
(


 
 
 
 
(
)
 
=
>
 
p
a
r
s
e
A
r
r
(
i
n
p
u
t
)
 
?
?
 
[
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
,
 
6
0
,
 
8
0
]
,


 
 
 
 
[
i
n
p
u
t
]
,


 
 
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
I
n
s
e
r
t
F
r
a
m
e
s
(
p
a
r
s
e
d
)
;


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
s
e
a
r
c
h
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
S
e
a
r
c
h
F
r
a
m
e
s
(
p
a
r
s
e
d
,
 
t
a
r
g
e
t
)
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
D
e
l
e
t
e
F
r
a
m
e
s
(
p
a
r
s
e
d
,
 
t
a
r
g
e
t
)
;


 
 
}
,
 
[
m
o
d
e
,
 
p
a
r
s
e
d
,
 
t
a
r
g
e
t
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=


 
 
 
 
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
"
 
?
 
I
N
S
E
R
T
_
P
S
E
U
D
O
 
:
 
m
o
d
e
 
=
=
=
 
"
s
e
a
r
c
h
"
 
?
 
S
E
A
R
C
H
_
P
S
E
U
D
O
 
:
 
D
E
L
E
T
E
_
P
S
E
U
D
O
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
2
 
i
t
e
m
s
-
c
e
n
t
e
r
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
{
(
[
"
i
n
s
e
r
t
"
,
 
"
s
e
a
r
c
h
"
,
 
"
d
e
l
e
t
e
"
]
 
a
s
 
M
o
d
e
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
k
e
y
=
{
m
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
M
o
d
e
(
m
)
}
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
m
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
c
a
p
i
t
a
l
i
z
e
"
>
{
m
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
{
(
m
o
d
e
 
=
=
=
 
"
s
e
a
r
c
h
"
 
|
|
 
m
o
d
e
 
=
=
=
 
"
d
e
l
e
t
e
"
)
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
l
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
o
n
t
-
m
e
d
i
u
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
s
e
a
r
c
h
"
 
?
 
"
t
a
r
g
e
t
:
"
 
:
 
"
k
e
y
 
t
o
 
d
e
l
e
t
e
:
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
t
a
r
g
e
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
T
a
r
g
e
t
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
2
0
 
p
x
-
2
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
x
s
 
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
d
e
l
e
t
e
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
i
t
a
l
i
c
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
y
 
2
0
 
(
l
e
a
f
)
,
 
3
0
 
(
t
w
o
 
c
h
i
l
d
r
e
n
)
,
 
o
r
 
5
0
 
(
r
o
o
t
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
B
S
T
,
 
$
{
m
o
d
e
}
`
}


 
 
 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
s
e
r
t
 
s
e
q
u
e
n
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
5
0
,
 
3
0
,
 
7
0
,
 
2
0
,
 
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
 
=
=
=
 
"
d
e
l
e
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
T
r
e
e
 
i
s
 
b
u
i
l
t
 
f
r
o
m
 
t
h
i
s
 
s
e
q
u
e
n
c
e
,
 
t
h
e
n
 
t
h
e
 
t
a
r
g
e
t
 
k
e
y
 
i
s
 
d
e
l
e
t
e
d
 
w
i
t
h
 
t
h
e
 
3
-
c
a
s
e
 
d
i
s
p
a
t
c
h
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
V
a
l
u
e
s
 
a
r
e
 
i
n
s
e
r
t
e
d
 
o
n
e
 
b
y
 
o
n
e
 
i
n
 
t
h
e
 
g
i
v
e
n
 
o
r
d
e
r
.
"


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
P
R
E
S
E
T
S
_
F
O
R
[
m
o
d
e
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
s
e
A
r
r
(
v
)
)
 
s
e
t
I
n
p
u
t
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{


 
 
 
 
 
 
 
 
 
 
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
B
S
T
V
i
z


 
 
 
 
 
 
 
 
 
 
t
r
e
e
=
{
f
r
a
m
e
?
.
t
r
e
e
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
r
o
o
t
I
d
=
{
f
r
a
m
e
?
.
r
o
o
t
I
d
 
?
?
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
=
{
f
r
a
m
e
?
.
n
o
d
e
S
t
a
t
e
s
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
5
6
0
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
3
2
0
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}


 
 
 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
i
t
e
m
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
h
e
 
B
S
T
 
i
n
v
a
r
i
a
n
t
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
F
o
r
 
e
v
e
r
y
 
n
o
d
e
:
 
a
l
l
 
k
e
y
s
 
i
n
 
t
h
e
 
l
e
f
t
 
s
u
b
t
r
e
e
 
a
r
e
 
s
t
r
i
c
t
l
y
 
l
e
s
s
,
 
a
n
d
 
a
l
l
 
k
e
y
s
 
i
n
 
t
h
e
 
r
i
g
h
t
 
s
u
b
t
r
e
e
 
a
r
e
 
s
t
r
i
c
t
l
y
 
g
r
e
a
t
e
r
.
 
T
h
i
s
 
p
r
o
p
e
r
t
y
 
m
u
s
t
 
h
o
l
d
 
r
e
c
u
r
s
i
v
e
l
y
,
 
n
o
t
 
j
u
s
t
 
f
o
r
 
d
i
r
e
c
t
 
c
h
i
l
d
r
e
n
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
n
s
e
r
t
 
i
s
 
a
 
w
a
l
k
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
S
t
a
r
t
i
n
g
 
a
t
 
t
h
e
 
r
o
o
t
,
 
c
o
m
p
a
r
e
 
w
i
t
h
 
t
h
e
 
c
u
r
r
e
n
t
 
n
o
d
e
'
s
 
v
a
l
u
e
.
 
G
o
 
l
e
f
t
 
o
r
 
r
i
g
h
t
 
u
n
t
i
l
 
y
o
u
 
h
i
t
 
a
 
n
u
l
l
 
p
o
i
n
t
e
r
,
 
t
h
a
t
'
s
 
w
h
e
r
e
 
t
h
e
 
n
e
w
 
n
o
d
e
 
l
a
n
d
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
e
a
r
c
h
 
i
s
 
t
h
e
 
s
a
m
e
 
w
a
l
k
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
A
t
 
e
a
c
h
 
n
o
d
e
:
 
m
a
t
c
h
 
-
>
 
d
o
n
e
.
 
S
m
a
l
l
e
r
 
-
>
 
l
e
f
t
.
 
L
a
r
g
e
r
 
-
>
 
r
i
g
h
t
.
 
N
u
l
l
 
-
>
 
n
o
t
 
f
o
u
n
d
.
 
T
h
i
s
 
i
s
 
w
h
y
 
b
a
l
a
n
c
e
d
 
B
S
T
s
 
g
i
v
e
 
O
(
l
o
g
 
n
)
 
s
e
a
r
c
h
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
l
e
t
e
 
h
a
s
 
3
 
c
a
s
e
s
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
(
1
)
 
L
e
a
f
:
 
j
u
s
t
 
r
e
m
o
v
e
 
i
t
.
 
(
2
)
 
O
n
e
 
c
h
i
l
d
:
 
r
e
p
l
a
c
e
 
n
o
d
e
 
w
i
t
h
 
i
t
s
 
c
h
i
l
d
.
 
(
3
)
 
T
w
o
 
c
h
i
l
d
r
e
n
:
 
s
w
a
p
 
t
h
e
 
n
o
d
e
'
s
 
v
a
l
u
e
 
w
i
t
h
 
i
t
s
 
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
 
(
s
m
a
l
l
e
s
t
 
i
n
 
r
i
g
h
t
 
s
u
b
t
r
e
e
)
,
 
t
h
e
n
 
d
e
l
e
t
e
 
t
h
a
t
 
s
u
c
c
e
s
s
o
r
.
"
,


 
 
 
 
}
,


 
 
]
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
w
h
a
t
 
m
a
k
e
s
 
a
 
B
S
T
 
u
s
e
f
u
l
?
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
S
o
r
t
e
d
-
o
n
-
d
e
m
a
n
d
 
b
y
 
s
t
r
u
c
t
u
r
e
,
 
n
o
t
 
b
y
 
s
o
r
t
i
n
g
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
A
 
B
S
T
 
i
s
 
a
 
p
h
o
n
e
b
o
o
k
 
t
h
a
t
 
l
e
t
s
 
y
o
u
 
s
k
i
p
 
h
a
l
f
 
t
h
e
 
n
a
m
e
s
 
w
i
t
h
 
e
v
e
r
y
 
c
o
m
p
a
r
i
s
o
n
.
 
E
a
c
h
 
n
o
d
e


 
 
 
 
 
 
 
 
 
 
h
o
l
d
s
 
a
 
v
a
l
u
e
;
 
e
v
e
r
y
t
h
i
n
g
 
s
m
a
l
l
e
r
 
s
i
t
s
 
i
n
 
t
h
e
 
l
e
f
t
 
s
u
b
t
r
e
e
,
 
e
v
e
r
y
t
h
i
n
g
 
l
a
r
g
e
r
 
i
n
 
t
h
e


 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
.
 
T
h
a
t
 
s
i
n
g
l
e
 
r
u
l
e
 
(
t
h
e
 
B
S
T
 
i
n
v
a
r
i
a
n
t
)
 
i
s
 
w
h
a
t
 
p
o
w
e
r
s
 
f
a
s
t
 
s
e
a
r
c
h
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
{
s
.
t
i
t
l
e
}
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
 
[
5
,
3
,
7
,
1
,
4
]
,
 
w
h
a
t
 
i
s
 
t
h
e
 
i
n
o
r
d
e
r
 
o
u
t
p
u
t
?
"
,
 
a
:
 
"
1
,
3
,
4
,
5
,
7
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
 
8
 
i
n
t
o
 
{
5
,
3
,
7
,
6
,
9
}
,
 
8
 
b
e
c
o
m
e
s
 
w
h
i
c
h
 
n
o
d
e
'
s
 
l
e
f
t
/
r
i
g
h
t
 
c
h
i
l
d
?
"
,
 
a
:
 
"
9
-
l
e
f
t
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
e
a
r
c
h
 
1
5
 
i
n
 
{
1
0
,
5
,
2
0
,
3
,
7
,
1
5
,
2
5
}
.
 
H
o
w
 
m
a
n
y
 
c
o
m
p
a
r
i
s
o
n
s
?
"
,
 
a
:
 
"
3
"
 
}
,


 
 
 
 
{
 
q
:
 
"
D
e
l
e
t
e
 
1
0
 
f
r
o
m
 
{
1
0
,
5
,
2
0
,
3
,
7
,
1
5
,
2
5
}
.
 
N
e
w
 
r
o
o
t
 
v
a
l
u
e
 
(
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
)
?
"
,
 
a
:
 
"
1
5
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
]
 
=
 
u
s
e
S
t
a
t
e
<
(
s
t
r
i
n
g
 
|
 
n
u
l
l
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
n
]
 
=
 
u
s
e
S
t
a
t
e
<
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
)
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
W
o
r
k
 
i
t
 
o
u
t
 
o
n
 
p
a
p
e
r
 
f
i
r
s
t
,
 
t
h
e
n
 
r
e
v
e
a
l
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
g
 
=
 
(
g
u
e
s
s
e
s
[
i
]
 
?
?
 
"
"
)
.
r
e
p
l
a
c
e
(
/
\
s
+
/
g
,
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
 
=
=
=
 
p
.
a
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
1
0
0
 
f
l
e
x
-
1
"
>
{
p
.
q
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
e
s
[
i
]
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
G
u
e
s
s
e
s
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
2
 
p
x
-
2
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
x
s
 
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
n
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
2
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
o
s
e
-
5
0
 
d
a
r
k
:
b
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
r
o
s
e
-
2
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
o
s
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
e
 
s
k
e
w
e
d
-
t
r
e
e
 
t
r
a
p
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
n
s
e
r
t
i
n
g
 
a
l
r
e
a
d
y
-
s
o
r
t
e
d
 
d
a
t
a
 
i
n
t
o
 
a
 
p
l
a
i
n
 
B
S
T
 
p
r
o
d
u
c
e
s
 
a
 
l
i
n
k
e
d
 
l
i
s
t
 
i
n
 
d
i
s
g
u
i
s
e
.
 
E
v
e
r
y


 
 
 
 
 
 
 
 
 
 
o
p
e
r
a
t
i
o
n
 
d
e
g
r
a
d
e
s
 
t
o
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
O
(
n
)
<
/
s
t
r
o
n
g
>
.
 
T
h
i
s
 
i
s
 
e
x
a
c
t
l
y
 
w
h
y


 
 
 
 
 
 
 
 
 
 
A
V
L
 
a
n
d
 
R
e
d
-
B
l
a
c
k
 
t
r
e
e
s
 
e
x
i
s
t
,
 
t
h
e
y
 
s
e
l
f
-
b
a
l
a
n
c
e
 
t
o
 
p
r
e
s
e
r
v
e
 
O
(
l
o
g
 
n
)
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
 
f
o
r
 
d
e
l
e
t
e
?
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
 
i
s
 
t
h
e
 
s
m
a
l
l
e
s
t
 
k
e
y
 
l
a
r
g
e
r
 
t
h
a
n
 
t
h
e
 
n
o
d
e
 
b
e
i
n
g
 
d
e
l
e
t
e
d
,
 
s
o
 
r
e
p
l
a
c
i
n
g


 
 
 
 
 
 
 
 
 
 
t
h
e
 
n
o
d
e
 
w
i
t
h
 
i
t
 
p
r
e
s
e
r
v
e
s
 
t
h
e
 
B
S
T
 
i
n
v
a
r
i
a
n
t
 
e
v
e
r
y
w
h
e
r
e
.
 
T
h
e
 
s
u
c
c
e
s
s
o
r
 
a
l
w
a
y
s
 
h
a
s
 
a
t
 
m
o
s
t


 
 
 
 
 
 
 
 
 
 
o
n
e
 
(
r
i
g
h
t
)
 
c
h
i
l
d
,
 
w
h
i
c
h
 
m
a
k
e
s
 
i
t
 
c
h
e
a
p
 
t
o
 
s
p
l
i
c
e
 
o
u
t
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
C
o
u
n
t
 
o
f
 
d
i
s
t
i
n
c
t
 
B
S
T
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
n
u
m
b
e
r
 
o
f
 
s
t
r
u
c
t
u
r
a
l
l
y
 
d
i
s
t
i
n
c
t
 
B
S
T
s
 
w
i
t
h
 
n
 
k
e
y
s
 
i
s
 
t
h
e
 
<
e
m
>
n
-
t
h
 
C
a
t
a
l
a
n
 
n
u
m
b
e
r
<
/
e
m
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
C
(
n
)
 
=
 
(
2
n
)
!
 
/
 
(
(
n
+
1
)
!
 
*
 
n
!
)
.
 
A
 
c
l
a
s
s
i
c
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
:
 
h
o
w
 
m
a
n
y
 
B
S
T
s
 
o
n
 
k
e
y
s
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
{
"
{
1
.
.
n
}
"
}
 
h
a
v
e
 
a
 
s
p
e
c
i
f
i
c
 
p
r
o
p
e
r
t
y
,
 
s
t
a
r
t
 
f
r
o
m
 
t
h
i
s
 
i
d
e
n
t
i
t
y
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
s
s
o
n
 
e
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
3
_
B
S
T
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,


 
 
 
 
 
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,


 
 
 
 
 
 
i
c
o
n
:
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
,


 
 
 
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,


 
 
 
 
 
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,


 
 
 
 
 
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
,


 
 
 
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
o
r
s
t
-
c
a
s
e
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
s
e
a
r
c
h
 
i
n
 
a
 
p
l
a
i
n
 
(
u
n
b
a
l
a
n
c
e
d
)
 
B
S
T
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
I
f
 
t
h
e
 
t
r
e
e
 
d
e
g
e
n
e
r
a
t
e
s
 
i
n
t
o
 
a
 
c
h
a
i
n
 
(
i
n
s
e
r
t
 
s
o
r
t
e
d
 
d
a
t
a
)
,
 
s
e
a
r
c
h
 
t
r
a
v
e
r
s
e
s
 
e
v
e
r
y
 
n
o
d
e
,
 
O
(
n
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
s
e
r
t
i
n
g
 
6
,
 
2
,
 
8
,
 
1
,
 
4
 
i
n
 
o
r
d
e
r
,
 
w
h
a
t
 
i
s
 
t
h
e
 
i
n
o
r
d
e
r
 
t
r
a
v
e
r
s
a
l
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
[
1
,
2
,
4
,
6
,
8
]
"
,
 
"
[
6
,
2
,
8
,
1
,
4
]
"
,
 
"
[
1
,
4
,
2
,
8
,
6
]
"
,
 
"
[
1
,
2
,
6
,
4
,
8
]
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
0
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
B
S
T
 
i
n
o
r
d
e
r
 
i
s
 
a
l
w
a
y
s
 
s
o
r
t
e
d
 
a
s
c
e
n
d
i
n
g
,
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
i
n
s
e
r
t
i
o
n
 
o
r
d
e
r
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
e
n
 
d
e
l
e
t
i
n
g
 
a
 
n
o
d
e
 
w
i
t
h
 
t
w
o
 
c
h
i
l
d
r
e
n
,
 
t
h
e
 
s
t
a
n
d
a
r
d
 
r
e
p
l
a
c
e
m
e
n
t
 
i
s
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
t
h
e
 
l
e
f
t
 
c
h
i
l
d
"
,


 
 
 
 
 
 
 
 
"
a
n
y
 
l
e
a
f
"
,


 
 
 
 
 
 
 
 
"
t
h
e
 
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
 
(
o
r
 
p
r
e
d
e
c
e
s
s
o
r
)
"
,


 
 
 
 
 
 
 
 
"
t
h
e
 
r
o
o
t
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
U
s
i
n
g
 
t
h
e
 
i
n
o
r
d
e
r
 
s
u
c
c
e
s
s
o
r
 
p
r
e
s
e
r
v
e
s
 
t
h
e
 
B
S
T
 
i
n
v
a
r
i
a
n
t
 
a
n
d
 
k
e
e
p
s
 
t
h
e
 
r
e
p
l
a
c
e
m
e
n
t
 
s
i
m
p
l
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
B
S
T
 
h
a
s
 
n
 
n
o
d
e
s
 
a
n
d
 
h
e
i
g
h
t
 
h
.
 
W
h
i
c
h
 
i
s
 
a
l
w
a
y
s
 
t
r
u
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
h
 
=
 
l
o
g
2
(
n
)
"
,


 
 
 
 
 
 
 
 
"
c
e
i
l
(
l
o
g
2
(
n
+
1
)
)
 
<
=
 
h
 
<
=
 
n
"
,


 
 
 
 
 
 
 
 
"
h
 
<
=
 
l
o
g
2
(
n
)
"
,


 
 
 
 
 
 
 
 
"
h
 
=
 
n
 
a
l
w
a
y
s
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
M
i
n
i
m
u
m
 
h
e
i
g
h
t
 
o
c
c
u
r
s
 
w
h
e
n
 
p
e
r
f
e
c
t
l
y
 
b
a
l
a
n
c
e
d
:
 
c
e
i
l
(
l
o
g
2
(
n
+
1
)
)
.
 
M
a
x
i
m
u
m
 
w
h
e
n
 
f
u
l
l
y
 
s
k
e
w
e
d
:
 
h
 
=
 
n
 
-
 
1
 
(
s
o
m
e
 
t
e
x
t
s
 
s
a
y
 
n
)
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
B
i
n
a
r
y
 
S
e
a
r
c
h
 
T
r
e
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
2
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
E
s
s
e
n
t
i
a
l
 
f
o
u
n
d
a
t
i
o
n
 
f
o
r
 
m
a
p
s
,
 
s
e
t
s
 
&
 
b
a
l
a
n
c
e
d
 
t
r
e
e
s
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
A
V
L
 
T
r
e
e
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


