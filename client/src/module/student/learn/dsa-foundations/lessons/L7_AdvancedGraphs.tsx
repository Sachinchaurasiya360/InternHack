
i
m
p
o
r
t
 
R
e
a
c
t
,
 
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


 
 
I
n
l
i
n
e
C
o
d
e
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
g
r
a
p
h
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
 
 
K
o
s
a
r
a
j
u
 
h
e
l
p
e
r
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




c
o
n
s
t
 
S
C
C
_
P
A
L
E
T
T
E
 
=
 
[


 
 
"
#
3
b
8
2
f
6
"
,
 
"
#
e
f
4
4
4
4
"
,
 
"
#
1
0
b
9
8
1
"
,
 
"
#
f
5
9
e
0
b
"
,
 
"
#
8
b
5
c
f
6
"
,
 
"
#
e
c
4
8
9
9
"
,
 
"
#
0
6
b
6
d
4
"
,


]
;




t
y
p
e
 
N
o
d
e
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
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
d
o
n
e
"
;




i
n
t
e
r
f
a
c
e
 
K
F
r
a
m
e
 
{


 
 
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


 
 
p
h
a
s
e
:
 
"
d
f
s
1
"
 
|
 
"
r
e
v
e
r
s
e
"
 
|
 
"
d
f
s
2
"
 
|
 
"
d
o
n
e
"
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
n
o
d
e
S
c
c
C
o
l
o
r
?
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
>
;


 
 
r
e
v
e
r
s
e
d
:
 
b
o
o
l
e
a
n
;


 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
s
t
r
i
n
g
[
]
;


 
 
s
c
c
L
i
s
t
:
 
s
t
r
i
n
g
[
]
[
]
;


 
 
h
i
g
h
l
i
g
h
t
E
d
g
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
 
b
o
o
l
e
a
n
>
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
K
 
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
 
k
o
s
a
r
a
j
u
(
G
)
:
"
,


 
 
"
 
 
#
 
P
h
a
s
e
 
1
:
 
D
F
S
 
o
n
 
G
,
 
r
e
c
o
r
d
 
f
i
n
i
s
h
 
o
r
d
e
r
"
,


 
 
"
 
 
f
o
r
 
v
 
i
n
 
V
:
 
i
f
 
u
n
v
i
s
i
t
e
d
:
 
d
f
s
1
(
v
)
"
,


 
 
"
 
 
d
f
s
1
:
 
r
e
c
u
r
s
e
 
n
e
i
g
h
b
o
r
s
,
 
p
u
s
h
 
o
n
 
f
i
n
i
s
h
"
,


 
 
"
 
 
#
 
P
h
a
s
e
 
2
:
 
r
e
v
e
r
s
e
 
a
l
l
 
e
d
g
e
s
 
-
>
 
G
^
T
"
,


 
 
"
 
 
#
 
P
h
a
s
e
 
3
:
 
D
F
S
 
o
n
 
G
^
T
 
i
n
 
r
e
v
-
f
i
n
i
s
h
 
o
r
d
e
r
"
,


 
 
"
 
 
f
o
r
 
v
 
i
n
 
r
e
v
e
r
s
e
d
(
f
i
n
i
s
h
)
:
"
,


 
 
"
 
 
 
 
i
f
 
u
n
v
i
s
i
t
e
d
 
i
n
 
G
^
T
:
"
,


 
 
"
 
 
 
 
 
 
s
c
c
s
.
a
p
p
e
n
d
(
 
d
f
s
2
(
v
)
 
)
"
,


]
;




c
o
n
s
t
 
K
O
S
A
R
A
J
U
_
I
D
S
 
=
 
[
"
A
"
,
 
"
B
"
,
 
"
C
"
,
 
"
D
"
,
 
"
E
"
,
 
"
F
"
]
;


c
o
n
s
t
 
K
O
S
A
R
A
J
U
_
E
D
G
E
S
:
 
[
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
]
[
]
 
=
 
[


 
 
[
"
A
"
,
 
"
B
"
]
,
 
[
"
B
"
,
 
"
C
"
]
,
 
[
"
C
"
,
 
"
A
"
]
,


 
 
[
"
B
"
,
 
"
D
"
]
,
 
[
"
D
"
,
 
"
E
"
]
,
 
[
"
E
"
,
 
"
F
"
]
,
 
[
"
F
"
,
 
"
D
"
]
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
 
b
u
i
l
d
K
o
s
a
r
a
j
u
F
r
a
m
e
s
(


 
 
i
d
s
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


 
 
e
d
g
e
s
:
 
[
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
]
[
]
,


)
:
 
K
F
r
a
m
e
[
]
 
{


 
 
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
 
K
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
 
a
d
j
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
[
]
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
r
e
v
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
[
]
>
 
=
 
{
}
;


 
 
i
d
s
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
i
d
)
 
=
>
 
{
 
a
d
j
[
i
d
]
 
=
 
[
]
;
 
r
e
v
[
i
d
]
 
=
 
[
]
;
 
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
 
[
u
,
 
v
]
 
o
f
 
e
d
g
e
s
)
 
{
 
a
d
j
[
u
]
.
p
u
s
h
(
v
)
;
 
r
e
v
[
v
]
.
p
u
s
h
(
u
)
;
 
}




 
 
c
o
n
s
t
 
v
i
s
i
t
e
d
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
 
b
o
o
l
e
a
n
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
f
i
n
i
s
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


 
 
c
o
n
s
t
 
n
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
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
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
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


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
V
:
 
i
d
s
.
l
e
n
g
t
h
,
 
E
:
 
e
d
g
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


 
 
 
 
m
e
s
s
a
g
e
:
 
"
S
t
a
r
t
 
K
o
s
a
r
a
j
u
.
 
P
h
a
s
e
 
1
:
 
D
F
S
 
o
n
 
o
r
i
g
i
n
a
l
 
g
r
a
p
h
 
t
o
 
r
e
c
o
r
d
 
f
i
n
i
s
h
 
t
i
m
e
s
.
"
,


 
 
 
 
p
h
a
s
e
:
 
"
d
f
s
1
"
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
n
s
 
}
,


 
 
 
 
r
e
v
e
r
s
e
d
:
 
f
a
l
s
e
,


 
 
 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
]
,


 
 
 
 
s
c
c
L
i
s
t
:
 
[
]
,


 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
}
,


 
 
}
)
;




 
 
f
u
n
c
t
i
o
n
 
d
f
s
1
(
u
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
v
i
s
i
t
e
d
[
u
]
 
=
 
t
r
u
e
;


 
 
 
 
n
s
[
u
]
 
=
 
"
a
c
t
i
v
e
"
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


 
 
 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
v
i
s
i
t
:
 
u
,
 
f
i
n
i
s
h
L
e
n
:
 
f
i
n
i
s
h
.
l
e
n
g
t
h
 
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
D
F
S
1
:
 
v
i
s
i
t
i
n
g
 
$
{
u
}
.
`
,


 
 
 
 
 
 
p
h
a
s
e
:
 
"
d
f
s
1
"
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
n
s
 
}
,


 
 
 
 
 
 
r
e
v
e
r
s
e
d
:
 
f
a
l
s
e
,


 
 
 
 
 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
.
.
.
f
i
n
i
s
h
]
,


 
 
 
 
 
 
s
c
c
L
i
s
t
:
 
[
]
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
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
 
w
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
i
f
 
(
!
v
i
s
i
t
e
d
[
w
]
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


 
 
 
 
 
 
 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
f
r
o
m
:
 
u
,
 
t
o
:
 
w
 
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
D
e
s
c
e
n
d
 
$
{
u
}
 
-
>
 
$
{
w
}
.
`
,


 
 
 
 
 
 
 
 
 
 
p
h
a
s
e
:
 
"
d
f
s
1
"
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
n
s
 
}
,


 
 
 
 
 
 
 
 
 
 
r
e
v
e
r
s
e
d
:
 
f
a
l
s
e
,


 
 
 
 
 
 
 
 
 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
.
.
.
f
i
n
i
s
h
]
,


 
 
 
 
 
 
 
 
 
 
s
c
c
L
i
s
t
:
 
[
]
,


 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
 
[
`
$
{
u
}
-
>
$
{
w
}
`
]
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
d
f
s
1
(
w
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
n
s
[
u
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
f
i
n
i
s
h
.
p
u
s
h
(
u
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


 
 
 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
f
i
n
i
s
h
e
d
:
 
u
,
 
f
i
n
i
s
h
O
r
d
e
r
:
 
`
[
$
{
f
i
n
i
s
h
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
`
 
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
i
n
i
s
h
 
$
{
u
}
.
 
f
i
n
i
s
h
 
=
 
[
$
{
f
i
n
i
s
h
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


 
 
 
 
 
 
p
h
a
s
e
:
 
"
d
f
s
1
"
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
n
s
 
}
,


 
 
 
 
 
 
r
e
v
e
r
s
e
d
:
 
f
a
l
s
e
,


 
 
 
 
 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
.
.
.
f
i
n
i
s
h
]
,


 
 
 
 
 
 
s
c
c
L
i
s
t
:
 
[
]
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
}
,


 
 
 
 
}
)
;


 
 
}




 
 
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
 
i
d
s
)
 
i
f
 
(
!
v
i
s
i
t
e
d
[
v
]
)
 
d
f
s
1
(
v
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


 
 
 
 
l
i
n
e
:
 
4
,


 
 
 
 
v
a
r
s
:
 
{
 
s
t
e
p
:
 
"
r
e
v
e
r
s
e
 
e
d
g
e
s
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
 
"
P
h
a
s
e
 
2
:
 
r
e
v
e
r
s
e
 
e
v
e
r
y
 
e
d
g
e
 
t
o
 
g
e
t
 
G
^
T
.
 
A
r
r
o
w
s
 
n
o
w
 
f
l
i
p
.
"
,


 
 
 
 
p
h
a
s
e
:
 
"
r
e
v
e
r
s
e
"
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
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
 
a
s
 
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
 
N
o
d
e
S
t
a
t
e
>
,


 
 
 
 
r
e
v
e
r
s
e
d
:
 
t
r
u
e
,


 
 
 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
.
.
.
f
i
n
i
s
h
]
,


 
 
 
 
s
c
c
L
i
s
t
:
 
[
]
,


 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
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
 
v
i
s
i
t
e
d
2
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
 
b
o
o
l
e
a
n
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
s
c
c
L
i
s
t
:
 
s
t
r
i
n
g
[
]
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
 
s
c
c
C
o
l
o
r
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
>
 
=
 
{
}
;




 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
f
i
n
i
s
h
.
l
e
n
g
t
h
 
-
 
1
;
 
k
 
>
=
 
0
;
 
k
-
-
)
 
{


 
 
 
 
c
o
n
s
t
 
s
e
e
d
 
=
 
f
i
n
i
s
h
[
k
]
;


 
 
 
 
i
f
 
(
v
i
s
i
t
e
d
2
[
s
e
e
d
]
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
c
o
n
s
t
 
c
o
m
p
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


 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
S
C
C
_
P
A
L
E
T
T
E
[
s
c
c
L
i
s
t
.
l
e
n
g
t
h
 
%
 
S
C
C
_
P
A
L
E
T
T
E
.
l
e
n
g
t
h
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
 
d
f
s
2
(
u
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
 
 
v
i
s
i
t
e
d
2
[
u
]
 
=
 
t
r
u
e
;


 
 
 
 
 
 
c
o
m
p
.
p
u
s
h
(
u
)
;


 
 
 
 
 
 
s
c
c
C
o
l
o
r
[
u
]
 
=
 
c
o
l
o
r
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
 
w
 
o
f
 
r
e
v
[
u
]
)
 
i
f
 
(
!
v
i
s
i
t
e
d
2
[
w
]
)
 
d
f
s
2
(
w
)
;


 
 
 
 
}


 
 
 
 
d
f
s
2
(
s
e
e
d
)
;


 
 
 
 
s
c
c
L
i
s
t
.
p
u
s
h
(
[
.
.
.
c
o
m
p
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


 
 
 
 
 
 
l
i
n
e
:
 
8
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
s
e
e
d
,
 
s
c
c
:
 
`
{
$
{
c
o
m
p
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
}
`
,
 
s
c
c
C
o
u
n
t
:
 
s
c
c
L
i
s
t
.
l
e
n
g
t
h
 
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
D
F
S
2
 
f
r
o
m
 
$
{
s
e
e
d
}
 
i
n
 
G
^
T
 
-
>
 
S
C
C
 
=
 
{
$
{
c
o
m
p
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
}
.
`
,


 
 
 
 
 
 
p
h
a
s
e
:
 
"
d
f
s
2
"
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
 
[
i
d
,
 
s
c
c
C
o
l
o
r
[
i
d
]
 
?
 
"
d
o
n
e
"
 
:
 
"
d
e
f
a
u
l
t
"
]
)


 
 
 
 
 
 
)
 
a
s
 
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
 
N
o
d
e
S
t
a
t
e
>
,


 
 
 
 
 
 
n
o
d
e
S
c
c
C
o
l
o
r
:
 
{
 
.
.
.
s
c
c
C
o
l
o
r
 
}
,


 
 
 
 
 
 
r
e
v
e
r
s
e
d
:
 
t
r
u
e
,


 
 
 
 
 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
.
.
.
f
i
n
i
s
h
]
,


 
 
 
 
 
 
s
c
c
L
i
s
t
:
 
s
c
c
L
i
s
t
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
}
,


 
 
 
 
}
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


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
s
c
c
s
:
 
s
c
c
L
i
s
t
.
l
e
n
g
t
h
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


 
 
 
 
m
e
s
s
a
g
e
:
 
`
D
o
n
e
.
 
F
o
u
n
d
 
$
{
s
c
c
L
i
s
t
.
l
e
n
g
t
h
}
 
s
t
r
o
n
g
l
y
 
c
o
n
n
e
c
t
e
d
 
c
o
m
p
o
n
e
n
t
(
s
)
.
`
,


 
 
 
 
p
h
a
s
e
:
 
"
d
o
n
e
"
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
 
[
i
d
,
 
"
d
o
n
e
"
]
)
)
 
a
s
 
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
 
N
o
d
e
S
t
a
t
e
>
,


 
 
 
 
n
o
d
e
S
c
c
C
o
l
o
r
:
 
{
 
.
.
.
s
c
c
C
o
l
o
r
 
}
,


 
 
 
 
r
e
v
e
r
s
e
d
:
 
t
r
u
e
,


 
 
 
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
.
.
.
f
i
n
i
s
h
]
,


 
 
 
 
s
c
c
L
i
s
t
,


 
 
 
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
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
 
 
K
o
s
a
r
a
j
u
 
S
V
G
 
g
r
a
p
h
 
r
e
n
d
e
r
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
r
c
l
e
L
a
y
o
u
t
(


 
 
i
d
s
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
x
 
=
 
2
4
0
,


 
 
c
y
 
=
 
1
4
0
,


 
 
r
 
=
 
1
0
0
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
 
n
 
=
 
i
d
s
.
l
e
n
g
t
h
;


 
 
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


 
 
i
d
s
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
i
d
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
 
a
n
g
l
e
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
)
 
-
 
M
a
t
h
.
P
I
 
/
 
2
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
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
l
e
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
l
e
)
 
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
 
n
o
d
e
C
o
l
o
r
(
s
t
a
t
e
:
 
N
o
d
e
S
t
a
t
e
,
 
s
c
c
C
o
l
?
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
c
c
C
o
l
)
 
r
e
t
u
r
n
 
s
c
c
C
o
l
;


 
 
i
f
 
(
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
)
 
r
e
t
u
r
n
 
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
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
)
 
r
e
t
u
r
n
 
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
;


 
 
r
e
t
u
r
n
 
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
 
K
o
s
a
r
a
j
u
G
r
a
p
h
(
{


 
 
i
d
s
,


 
 
e
d
g
e
s
,


 
 
f
r
a
m
e
,


}
:
 
{


 
 
i
d
s
:
 
s
t
r
i
n
g
[
]
;


 
 
e
d
g
e
s
:
 
[
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
]
[
]
;


 
 
f
r
a
m
e
:
 
K
F
r
a
m
e
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
i
r
c
l
e
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
)
;


 
 
c
o
n
s
t
 
W
 
=
 
4
8
0
;


 
 
c
o
n
s
t
 
H
 
=
 
2
8
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
W
}


 
 
 
 
 
 
h
e
i
g
h
t
=
{
H
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
W
}
 
$
{
H
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
b
l
o
c
k
 
m
x
-
a
u
t
o
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
a
x
W
i
d
t
h
:
 
"
1
0
0
%
"
,
 
o
v
e
r
f
l
o
w
:
 
"
v
i
s
i
b
l
e
"
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
E
d
g
e
s
 
*
/
}


 
 
 
 
 
 
{
e
d
g
e
s
.
m
a
p
(
(
[
u
,
 
v
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
r
o
m
I
d
 
=
 
f
r
a
m
e
.
r
e
v
e
r
s
e
d
 
?
 
v
 
:
 
u
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
I
d
 
=
 
f
r
a
m
e
.
r
e
v
e
r
s
e
d
 
?
 
u
 
:
 
v
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
r
o
m
P
o
s
 
=
 
p
o
s
[
f
r
o
m
I
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
P
o
s
 
=
 
p
o
s
[
t
o
I
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
f
r
o
m
P
o
s
 
|
|
 
!
t
o
P
o
s
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


 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
`
$
{
u
}
-
>
$
{
v
}
`
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
!
!
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
E
d
g
e
s
[
k
e
y
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
t
o
P
o
s
.
x
 
-
 
f
r
o
m
P
o
s
.
x
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
t
o
P
o
s
.
y
 
-
 
f
r
o
m
P
o
s
.
y
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
i
s
t
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
x
 
=
 
d
x
 
/
 
d
i
s
t
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
y
 
=
 
d
y
 
/
 
d
i
s
t
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
1
 
=
 
f
r
o
m
P
o
s
.
x
 
+
 
u
x
 
*
 
(
R
 
+
 
2
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
1
 
=
 
f
r
o
m
P
o
s
.
y
 
+
 
u
y
 
*
 
(
R
 
+
 
2
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
2
 
=
 
t
o
P
o
s
.
x
 
-
 
u
x
 
*
 
(
R
 
+
 
8
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
2
 
=
 
t
o
P
o
s
.
y
 
-
 
u
y
 
*
 
(
R
 
+
 
8
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
g
 
k
e
y
=
{
k
e
y
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
a
r
r
o
w
-
$
{
k
e
y
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
[
^
a
-
z
A
-
Z
0
-
9
]
/
g
,
 
"
_
"
)
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
X
=
"
4
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
Y
=
"
2
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
r
i
e
n
t
=
"
a
u
t
o
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
=
"
M
0
,
0
 
L
0
,
4
 
L
6
,
2
 
z
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
a
c
t
i
v
e
 
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
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
x
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
y
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
x
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
y
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
a
c
t
i
v
e
 
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
M
u
t
e
d
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
a
c
t
i
v
e
 
?
 
2
.
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
E
n
d
=
{
`
u
r
l
(
#
a
r
r
o
w
-
$
{
k
e
y
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
[
^
a
-
z
A
-
Z
0
-
9
]
/
g
,
 
"
_
"
)
}
)
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
{
a
c
t
i
v
e
 
?
 
1
 
:
 
0
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
:
 
"
s
t
r
o
k
e
 
0
.
2
s
,
 
o
p
a
c
i
t
y
 
0
.
2
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
{
/
*
 
N
o
d
e
s
 
*
/
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
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
p
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
 
f
r
a
m
e
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
[
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
c
c
C
o
l
 
=
 
f
r
a
m
e
.
n
o
d
e
S
c
c
C
o
l
o
r
?
.
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
n
o
d
e
C
o
l
o
r
(
s
t
a
t
e
,
 
s
c
c
C
o
l
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
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
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
p
.
y
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
f
i
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
i
s
A
c
t
i
v
e
 
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
i
s
A
c
t
i
v
e
 
?
 
2
.
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
:
 
"
f
i
l
l
 
0
.
3
s
,
 
s
t
r
o
k
e
 
0
.
3
s
"
 
}
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
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
.
y
 
+
 
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
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
"
1
3
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
s
c
c
C
o
l
 
|
|
 
s
t
a
t
e
 
!
=
=
 
"
d
e
f
a
u
l
t
"
 
?
 
"
#
f
f
f
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
o
i
n
t
e
r
E
v
e
n
t
s
:
 
"
n
o
n
e
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
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




f
u
n
c
t
i
o
n
 
K
o
s
a
r
a
j
u
V
i
s
u
a
l
i
z
e
r
(
)
 
{


 
 
c
o
n
s
t
 
i
d
s
 
=
 
K
O
S
A
R
A
J
U
_
I
D
S
;


 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
K
O
S
A
R
A
J
U
_
E
D
G
E
S
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
 
b
u
i
l
d
K
o
s
a
r
a
j
u
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
)
,
 
[
i
d
s
,
 
e
d
g
e
s
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




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
"
K
o
s
a
r
a
j
u
'
s
 
S
t
r
o
n
g
l
y
 
C
o
n
n
e
c
t
e
d
 
C
o
m
p
o
n
e
n
t
s
"


 
 
 
 
 
 
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
P
S
E
U
D
O
_
K
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
K
o
s
a
r
a
j
u
G
r
a
p
h
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
f
r
a
m
e
=
{
f
r
a
m
e
 
?
?
 
{


 
 
 
 
 
 
 
 
 
 
l
i
n
e
:
 
0
,
 
v
a
r
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
 
"
"
,
 
p
h
a
s
e
:
 
"
d
f
s
1
"
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
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
 
a
s
 
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
 
N
o
d
e
S
t
a
t
e
>
,


 
 
 
 
 
 
 
 
 
 
r
e
v
e
r
s
e
d
:
 
f
a
l
s
e
,
 
f
i
n
i
s
h
O
r
d
e
r
:
 
[
]
,
 
s
c
c
L
i
s
t
:
 
[
]
,
 
h
i
g
h
l
i
g
h
t
E
d
g
e
s
:
 
{
}
,


 
 
 
 
 
 
 
 
}
}
 
/
>


 
 
 
 
 
 
 
 
{
/
*
 
S
C
C
 
l
e
g
e
n
d
 
*
/
}


 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
s
c
c
L
i
s
t
?
.
l
e
n
g
t
h
 
?
?
 
0
)
 
>
 
0
 
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
!
.
s
c
c
L
i
s
t
.
m
a
p
(
(
c
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
i
n
l
i
n
e
-
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
1
.
5
 
p
x
-
2
.
5
 
p
y
-
1
 
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
t
o
n
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
s
t
o
n
e
-
2
0
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
2
.
5
 
h
-
2
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
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
S
C
C
_
P
A
L
E
T
T
E
[
i
 
%
 
S
C
C
_
P
A
L
E
T
T
E
.
l
e
n
g
t
h
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
C
C
 
{
i
 
+
 
1
}
:
 
{
`
{
$
{
c
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
f
i
n
i
s
h
O
r
d
e
r
 
&
&
 
f
r
a
m
e
.
f
i
n
i
s
h
O
r
d
e
r
.
l
e
n
g
t
h
 
>
 
0
 
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
o
n
o
 
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
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
f
i
n
i
s
h
 
o
r
d
e
r
:
 
[
{
f
r
a
m
e
.
f
i
n
i
s
h
O
r
d
e
r
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


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
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
a
r
t
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
d
i
v
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
 
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
h
e
l
p
e
r
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
W
F
r
a
m
e
 
{


 
 
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


 
 
d
i
s
t
:
 
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
[
]
;


 
 
k
:
 
n
u
m
b
e
r
;


 
 
i
:
 
n
u
m
b
e
r
;


 
 
j
:
 
n
u
m
b
e
r
;


 
 
u
p
d
a
t
e
d
?
:
 
b
o
o
l
e
a
n
;


 
 
i
d
s
:
 
s
t
r
i
n
g
[
]
;


 
 
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
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




c
o
n
s
t
 
P
S
E
U
D
O
_
F
W
 
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
 
f
l
o
y
d
W
a
r
s
h
a
l
l
(
d
i
s
t
)
:
"
,


 
 
"
 
 
f
o
r
 
k
 
f
r
o
m
 
0
 
t
o
 
n
-
1
:
"
,


 
 
"
 
 
 
 
f
o
r
 
i
 
f
r
o
m
 
0
 
t
o
 
n
-
1
:
"
,


 
 
"
 
 
 
 
 
 
f
o
r
 
j
 
f
r
o
m
 
0
 
t
o
 
n
-
1
:
"
,


 
 
"
 
 
 
 
 
 
 
 
i
f
 
d
[
i
]
[
k
]
+
d
[
k
]
[
j
]
 
<
 
d
[
i
]
[
j
]
:
"
,


 
 
"
 
 
 
 
 
 
 
 
 
 
d
[
i
]
[
j
]
 
=
 
d
[
i
]
[
k
]
 
+
 
d
[
k
]
[
j
]
"
,


]
;




c
o
n
s
t
 
F
W
_
I
D
S
 
=
 
[
"
A
"
,
 
"
B
"
,
 
"
C
"
,
 
"
D
"
]
;


c
o
n
s
t
 
F
W
_
E
D
G
E
S
:
 
[
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
,
 
n
u
m
b
e
r
]
[
]
 
=
 
[


 
 
[
"
A
"
,
 
"
B
"
,
 
3
]
,
 
[
"
A
"
,
 
"
C
"
,
 
7
]
,
 
[
"
B
"
,
 
"
C
"
,
 
2
]
,
 
[
"
B
"
,
 
"
D
"
,
 
5
]
,
 
[
"
C
"
,
 
"
D
"
,
 
1
]
,
 
[
"
D
"
,
 
"
A
"
,
 
6
]
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
 
b
u
i
l
d
F
W
F
r
a
m
e
s
(


 
 
i
d
s
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


 
 
e
d
g
e
s
:
 
[
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
,
 
n
u
m
b
e
r
]
[
]
,


)
:
 
F
W
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
n
 
=
 
i
d
s
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
i
d
x
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
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
i
d
s
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
i
d
,
 
i
)
 
=
>
 
(
i
d
x
[
i
d
]
 
=
 
i
)
)
;


 
 
c
o
n
s
t
 
d
i
s
t
:
 
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
)
 
=
>


 
 
 
 
n
e
w
 
A
r
r
a
y
<
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
)
.
f
i
l
l
(
n
u
l
l
)
,


 
 
)
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
d
i
s
t
[
i
]
[
i
]
 
=
 
0
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
 
[
u
,
 
v
,
 
w
]
 
o
f
 
e
d
g
e
s
)
 
{


 
 
 
 
c
o
n
s
t
 
i
i
 
=
 
i
d
x
[
u
]
;


 
 
 
 
c
o
n
s
t
 
j
j
 
=
 
i
d
x
[
v
]
;


 
 
 
 
i
f
 
(
d
i
s
t
[
i
i
]
[
j
j
]
 
=
=
=
 
n
u
l
l
 
|
|
 
w
 
<
 
d
i
s
t
[
i
i
]
[
j
j
]
!
)
 
d
i
s
t
[
i
i
]
[
j
j
]
 
=
 
w
;


 
 
}




 
 
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
W
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


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
n
,
 
s
t
e
p
:
 
"
i
n
i
t
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


 
 
 
 
 
 
"
I
n
i
t
i
a
l
i
z
e
 
d
i
s
t
a
n
c
e
 
m
a
t
r
i
x
:
 
0
 
o
n
 
d
i
a
g
o
n
a
l
,
 
d
i
r
e
c
t
 
e
d
g
e
 
w
e
i
g
h
t
s
,
 
n
u
l
l
 
(
i
n
f
i
n
i
t
y
)
 
o
t
h
e
r
w
i
s
e
.
"
,


 
 
 
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,


 
 
 
 
k
:
 
-
1
,


 
 
 
 
i
:
 
-
1
,


 
 
 
 
j
:
 
-
1
,


 
 
 
 
i
d
s
,


 
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
n
;
 
k
+
+
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


 
 
 
 
 
 
l
i
n
e
:
 
1
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
k
:
 
i
d
s
[
k
]
 
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
n
s
i
d
e
r
 
i
n
t
e
r
m
e
d
i
a
t
e
 
k
=
$
{
i
d
s
[
k
]
}
.
 
T
r
y
 
p
a
t
h
s
 
i
 
-
>
 
$
{
i
d
s
[
k
]
}
 
-
>
 
j
.
`
,


 
 
 
 
 
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,


 
 
 
 
 
 
k
,


 
 
 
 
 
 
i
:
 
-
1
,


 
 
 
 
 
 
j
:
 
-
1
,


 
 
 
 
 
 
i
d
s
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
:
 
k
,


 
 
 
 
}
)
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
{


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
0
;
 
j
 
<
 
n
;
 
j
+
+
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
i
 
=
=
=
 
k
 
|
|
 
j
 
=
=
=
 
k
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
i
a
 
=


 
 
 
 
 
 
 
 
 
 
d
i
s
t
[
i
]
[
k
]
 
!
=
=
 
n
u
l
l
 
&
&
 
d
i
s
t
[
k
]
[
j
]
 
!
=
=
 
n
u
l
l


 
 
 
 
 
 
 
 
 
 
 
 
?
 
d
i
s
t
[
i
]
[
k
]
!
 
+
 
d
i
s
t
[
k
]
[
j
]
!


 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
 
c
u
r
 
=
 
d
i
s
t
[
i
]
[
j
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
e
t
t
e
r
 
=
 
v
i
a
 
!
=
=
 
n
u
l
l
 
&
&
 
(
c
u
r
 
=
=
=
 
n
u
l
l
 
|
|
 
v
i
a
 
<
 
c
u
r
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


 
 
 
 
 
 
 
 
 
 
l
i
n
e
:
 
4
,


 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
k
:
 
i
d
s
[
k
]
,


 
 
 
 
 
 
 
 
 
 
 
 
i
:
 
i
d
s
[
i
]
,


 
 
 
 
 
 
 
 
 
 
 
 
j
:
 
i
d
s
[
j
]
,


 
 
 
 
 
 
 
 
 
 
 
 
"
d
[
i
]
[
k
]
"
:
 
d
i
s
t
[
i
]
[
k
]
 
=
=
=
 
n
u
l
l
 
?
 
"
i
n
f
"
 
:
 
d
i
s
t
[
i
]
[
k
]
!
,


 
 
 
 
 
 
 
 
 
 
 
 
"
d
[
k
]
[
j
]
"
:
 
d
i
s
t
[
k
]
[
j
]
 
=
=
=
 
n
u
l
l
 
?
 
"
i
n
f
"
 
:
 
d
i
s
t
[
k
]
[
j
]
!
,


 
 
 
 
 
 
 
 
 
 
 
 
v
i
a
:
 
v
i
a
 
=
=
=
 
n
u
l
l
 
?
 
"
i
n
f
"
 
:
 
v
i
a
,


 
 
 
 
 
 
 
 
 
 
 
 
"
d
[
i
]
[
j
]
"
:
 
c
u
r
 
=
=
=
 
n
u
l
l
 
?
 
"
i
n
f
"
 
:
 
c
u
r
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
 
b
e
t
t
e
r


 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
B
e
t
t
e
r
 
p
a
t
h
 
$
{
i
d
s
[
i
]
}
-
>
$
{
i
d
s
[
k
]
}
-
>
$
{
i
d
s
[
j
]
}
 
=
 
$
{
v
i
a
}
 
<
 
c
u
r
r
e
n
t
 
$
{
c
u
r
 
=
=
=
 
n
u
l
l
 
?
 
"
i
n
f
"
 
:
 
c
u
r
}
.
 
U
p
d
a
t
e
.
`


 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
N
o
 
i
m
p
r
o
v
e
m
e
n
t
 
f
o
r
 
(
$
{
i
d
s
[
i
]
}
,
 
$
{
i
d
s
[
j
]
}
)
.
`
,


 
 
 
 
 
 
 
 
 
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,


 
 
 
 
 
 
 
 
 
 
k
,


 
 
 
 
 
 
 
 
 
 
i
,


 
 
 
 
 
 
 
 
 
 
j
,


 
 
 
 
 
 
 
 
 
 
i
d
s
,


 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
:
 
k
,


 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
d
:
 
b
e
t
t
e
r
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
i
f
 
(
b
e
t
t
e
r
)
 
{


 
 
 
 
 
 
 
 
 
 
d
i
s
t
[
i
]
[
j
]
 
=
 
v
i
a
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


 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
:
 
5
,


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
[
`
d
[
$
{
i
d
s
[
i
]
}
]
[
$
{
i
d
s
[
j
]
}
]
`
]
:
 
d
i
s
t
[
i
]
[
j
]
!
 
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
t
 
d
[
$
{
i
d
s
[
i
]
}
]
[
$
{
i
d
s
[
j
]
}
]
 
=
 
$
{
d
i
s
t
[
i
]
[
j
]
}
.
`
,


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,


 
 
 
 
 
 
 
 
 
 
 
 
k
,


 
 
 
 
 
 
 
 
 
 
 
 
i
,


 
 
 
 
 
 
 
 
 
 
 
 
j
,


 
 
 
 
 
 
 
 
 
 
 
 
i
d
s
,


 
 
 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
:
 
k
,


 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
d
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
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


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
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


 
 
 
 
m
e
s
s
a
g
e
:
 
"
A
l
l
-
p
a
i
r
s
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
 
c
o
m
p
u
t
e
d
.
"
,


 
 
 
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,


 
 
 
 
k
:
 
n
 
-
 
1
,


 
 
 
 
i
:
 
-
1
,


 
 
 
 
j
:
 
-
1
,


 
 
 
 
i
d
s
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
 
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
m
a
t
r
i
x
 
r
e
n
d
e
r
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
F
W
M
a
t
r
i
x
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
F
W
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
n
 
=
 
f
r
a
m
e
.
i
d
s
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
C
E
L
L
 
=
 
4
4
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
"
>


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,


 
 
 
 
 
 
 
 
 
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
`
$
{
C
E
L
L
}
p
x
 
r
e
p
e
a
t
(
$
{
n
}
,
 
$
{
C
E
L
L
}
p
x
)
`
,


 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
/
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
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
,
 
j
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
h
-
$
{
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
C
E
L
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
2
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
5
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
 
=
=
=
 
j
 
?
 
"
#
8
b
5
c
f
6
"
 
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
:
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
c
o
l
o
r
 
0
.
2
5
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
{
/
*
 
D
a
t
a
 
r
o
w
s
 
*
/
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
i
d
s
.
m
a
p
(
(
r
i
d
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
R
e
a
c
t
.
F
r
a
g
m
e
n
t
 
k
e
y
=
{
`
r
o
w
-
$
{
r
i
d
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
C
E
L
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
C
E
L
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
5
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
 
=
=
=
 
i
 
?
 
"
#
8
b
5
c
f
6
"
 
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
:
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
c
o
l
o
r
 
0
.
2
5
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
d
i
s
t
[
i
]
.
m
a
p
(
(
v
,
 
j
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
f
r
a
m
e
.
i
 
=
=
=
 
i
 
&
&
 
f
r
a
m
e
.
j
 
=
=
=
 
j
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
K
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
 
=
=
=
 
j
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
R
o
w
C
o
l
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
p
d
a
t
e
d
 
=
 
i
s
A
c
t
i
v
e
 
&
&
 
!
!
f
r
a
m
e
.
u
p
d
a
t
e
d
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
u
p
d
a
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
1
0
1
,
1
6
3
,
1
3
,
0
.
1
8
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
A
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
8
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
K


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
0
8
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
T
H
E
M
E
.
b
g
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
o
r
d
e
r
 
=
 
u
p
d
a
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
2
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
A
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
f
5
9
e
0
b
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
1
p
x
 
s
o
l
i
d
 
$
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
`
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
i
}
-
$
{
j
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
C
E
L
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
C
E
L
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
3
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
v
 
=
=
=
 
n
u
l
l
 
?
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
b
a
c
k
g
r
o
u
n
d
 
0
.
3
s
,
 
b
o
r
d
e
r
 
0
.
3
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
=
=
=
 
n
u
l
l
 
?
 
"
i
n
f
"
 
:
 
v
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
)
}


 
 
 
 
 
 
 
 
 
 
<
/
R
e
a
c
t
.
F
r
a
g
m
e
n
t
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


 
 
 
 
 
 
{
f
r
a
m
e
.
k
 
>
=
 
0
 
&
&
 
f
r
a
m
e
.
k
 
<
 
n
 
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
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
#
7
c
3
a
e
d
"
,
 
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
:
 
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
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
m
e
d
i
a
t
e
 
k
 
=
 
<
s
t
r
o
n
g
>
{
f
r
a
m
e
.
i
d
s
[
f
r
a
m
e
.
k
]
}
<
/
s
t
r
o
n
g
>


 
 
 
 
 
 
 
 
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
 
F
l
o
y
d
W
a
r
s
h
a
l
l
V
i
s
u
a
l
i
z
e
r
(
)
 
{


 
 
c
o
n
s
t
 
i
d
s
 
=
 
F
W
_
I
D
S
;


 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
F
W
_
E
D
G
E
S
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
 
b
u
i
l
d
F
W
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
)
,
 
[
i
d
s
,
 
e
d
g
e
s
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
,
 
6
0
0
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
 
e
m
p
t
y
F
r
a
m
e
:
 
F
W
F
r
a
m
e
 
=
 
{


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
v
a
r
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
 
"
"
,


 
 
 
 
d
i
s
t
:
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
i
d
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
 
(
)
 
=
>


 
 
 
 
 
 
n
e
w
 
A
r
r
a
y
<
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
i
d
s
.
l
e
n
g
t
h
)
.
f
i
l
l
(
n
u
l
l
)
,


 
 
 
 
)
,


 
 
 
 
k
:
 
-
1
,


 
 
 
 
i
:
 
-
1
,


 
 
 
 
j
:
 
-
1
,


 
 
 
 
i
d
s
,


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
"
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
A
l
l
-
P
a
i
r
s
 
S
h
o
r
t
e
s
t
 
P
a
t
h
s
"


 
 
 
 
 
 
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
P
S
E
U
D
O
_
F
W
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
 
f
l
a
s
h
K
e
y
s
=
{
[
"
d
[
i
]
[
j
]
"
]
}
 
/
>
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
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
F
W
M
a
t
r
i
x
 
f
r
a
m
e
=
{
f
r
a
m
e
 
?
?
 
e
m
p
t
y
F
r
a
m
e
}
 
/
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
3
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
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
 
f
o
n
t
-
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
<
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
8
b
5
c
f
6
"
,
 
o
p
a
c
i
t
y
:
 
0
.
2
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
m
e
d
i
a
t
e
 
k


 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
f
5
9
e
0
b
"
,
 
o
p
a
c
i
t
y
:
 
0
.
4
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
 
c
e
l
l


 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
T
H
E
M
E
.
s
u
c
c
e
s
s
,
 
o
p
a
c
i
t
y
:
 
0
.
3
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
d


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
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
a
r
t
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
d
i
v
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
 
w
i
t
h
 
s
u
b
-
t
a
b
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
w
h
i
c
h
,
 
s
e
t
W
h
i
c
h
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
"
k
o
s
a
r
a
j
u
"
 
|
 
"
f
w
"
>
(
"
k
o
s
a
r
a
j
u
"
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
4
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
 
a
c
t
i
v
e
=
{
w
h
i
c
h
 
=
=
=
 
"
k
o
s
a
r
a
j
u
"
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
W
h
i
c
h
(
"
k
o
s
a
r
a
j
u
"
)
}
>


 
 
 
 
 
 
 
 
 
 
K
o
s
a
r
a
j
u
 
(
S
C
C
)


 
 
 
 
 
 
 
 
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
 
a
c
t
i
v
e
=
{
w
h
i
c
h
 
=
=
=
 
"
f
w
"
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
W
h
i
c
h
(
"
f
w
"
)
}
>


 
 
 
 
 
 
 
 
 
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
(
A
P
S
P
)


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
w
h
i
c
h
 
=
=
=
 
"
k
o
s
a
r
a
j
u
"
 
?
 
<
K
o
s
a
r
a
j
u
V
i
s
u
a
l
i
z
e
r
 
/
>
 
:
 
<
F
l
o
y
d
W
a
r
s
h
a
l
l
V
i
s
u
a
l
i
z
e
r
 
/
>
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
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
c
t
i
o
n
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
S
C
C
 
d
e
f
i
n
i
t
i
o
n
"
,
 
b
o
d
y
:
 
"
A
 
s
t
r
o
n
g
l
y
 
c
o
n
n
e
c
t
e
d
 
c
o
m
p
o
n
e
n
t
 
i
s
 
a
 
m
a
x
i
m
a
l
 
s
u
b
s
e
t
 
o
f
 
v
e
r
t
i
c
e
s
 
w
h
e
r
e
 
e
v
e
r
y
 
p
a
i
r
 
(
u
,
 
v
)
 
h
a
s
 
a
 
d
i
r
e
c
t
e
d
 
p
a
t
h
 
u
 
t
o
 
v
 
A
N
D
 
v
 
t
o
 
u
.
 
E
q
u
i
v
a
l
e
n
t
:
 
t
h
e
 
i
n
d
u
c
e
d
 
s
u
b
g
r
a
p
h
 
o
n
 
t
h
a
t
 
s
e
t
 
i
s
 
s
t
r
o
n
g
l
y
 
c
o
n
n
e
c
t
e
d
.
"
 
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
K
o
s
a
r
a
j
u
'
s
 
i
d
e
a
"
,
 
b
o
d
y
:
 
"
D
o
 
D
F
S
,
 
n
o
t
e
 
f
i
n
i
s
h
 
t
i
m
e
s
.
 
R
e
v
e
r
s
e
 
a
l
l
 
e
d
g
e
s
.
 
D
o
 
D
F
S
 
a
g
a
i
n
,
 
s
t
a
r
t
i
n
g
 
f
r
o
m
 
t
h
e
 
v
e
r
t
e
x
 
w
i
t
h
 
t
h
e
 
l
a
t
e
s
t
 
f
i
n
i
s
h
.
 
E
a
c
h
 
D
F
S
 
t
r
e
e
 
i
n
 
t
h
e
 
s
e
c
o
n
d
 
p
a
s
s
 
i
s
 
o
n
e
 
S
C
C
.
 
R
u
n
s
 
i
n
 
O
(
V
 
+
 
E
)
.
"
 
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
W
h
y
 
f
i
n
i
s
h
 
o
r
d
e
r
 
w
o
r
k
s
"
,
 
b
o
d
y
:
 
"
I
n
 
t
h
e
 
c
o
n
d
e
n
s
a
t
i
o
n
 
D
A
G
 
(
S
C
C
s
 
a
s
 
n
o
d
e
s
)
,
 
a
 
v
e
r
t
e
x
 
w
i
t
h
 
t
h
e
 
l
a
t
e
s
t
 
f
i
n
i
s
h
 
t
i
m
e
 
b
e
l
o
n
g
s
 
t
o
 
a
 
s
o
u
r
c
e
 
S
C
C
.
 
O
n
 
t
h
e
 
r
e
v
e
r
s
e
d
 
g
r
a
p
h
 
t
h
a
t
 
b
e
c
o
m
e
s
 
a
 
s
i
n
k
,
 
D
F
S
 
f
r
o
m
 
i
t
 
c
a
n
 
o
n
l
y
 
r
e
a
c
h
 
i
t
s
 
o
w
n
 
S
C
C
.
"
 
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
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
i
d
e
a
"
,
 
b
o
d
y
:
 
"
d
p
[
k
]
[
i
]
[
j
]
 
=
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
f
r
o
m
 
i
 
t
o
 
j
 
u
s
i
n
g
 
o
n
l
y
 
{
0
.
.
k
}
 
a
s
 
i
n
t
e
r
m
e
d
i
a
t
e
s
.
 
T
r
a
n
s
i
t
i
o
n
:
 
d
p
[
k
]
[
i
]
[
j
]
 
=
 
m
i
n
(
d
p
[
k
-
1
]
[
i
]
[
j
]
,
 
d
p
[
k
-
1
]
[
i
]
[
k
]
 
+
 
d
p
[
k
-
1
]
[
k
]
[
j
]
)
.
 
F
l
a
t
t
e
n
 
t
h
e
 
k
 
d
i
m
e
n
s
i
o
n
 
b
y
 
u
p
d
a
t
i
n
g
 
i
n
 
p
l
a
c
e
.
"
 
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
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
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
"
,
 
b
o
d
y
:
 
"
O
(
V
^
3
)
 
t
i
m
e
,
 
O
(
V
^
2
)
 
s
p
a
c
e
.
 
H
a
n
d
l
e
s
 
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
 
(
b
u
t
 
n
o
t
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
s
,
 
d
e
t
e
c
t
 
v
i
a
 
d
i
s
t
[
i
]
[
i
]
 
<
 
0
 
a
f
t
e
r
 
t
h
e
 
a
l
g
o
r
i
t
h
m
)
.
"
 
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
W
h
e
n
 
t
o
 
u
s
e
 
w
h
i
c
h
"
,
 
b
o
d
y
:
 
"
D
i
j
k
s
t
r
a
 
f
o
r
 
s
i
n
g
l
e
-
s
o
u
r
c
e
 
n
o
n
-
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
.
 
B
e
l
l
m
a
n
-
F
o
r
d
 
f
o
r
 
s
i
n
g
l
e
-
s
o
u
r
c
e
 
w
i
t
h
 
n
e
g
a
t
i
v
e
 
e
d
g
e
s
.
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
w
h
e
n
 
y
o
u
 
n
e
e
d
 
A
L
L
 
p
a
i
r
s
 
a
n
d
 
V
 
i
s
 
a
t
 
m
o
s
t
 
a
 
f
e
w
 
h
u
n
d
r
e
d
.
 
K
o
s
a
r
a
j
u
/
T
a
r
j
a
n
 
f
o
r
 
S
C
C
 
d
e
c
o
m
p
o
s
i
t
i
o
n
 
(
o
f
t
e
n
 
a
s
 
p
r
e
p
r
o
c
e
s
s
i
n
g
 
f
o
r
 
2
-
S
A
T
 
o
r
 
i
m
p
l
i
c
a
t
i
o
n
 
g
r
a
p
h
s
)
.
"
 
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
g
r
a
p
h
 
d
p
,
 
c
o
n
d
e
n
s
a
t
i
o
n
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
T
w
o
 
c
l
a
s
s
i
c
s
:
 
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
 
t
h
e
n
 
a
l
l
-
p
a
i
r
s
 
d
i
s
t
a
n
c
e
s
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


 
 
 
 
 
 
 
 
 
 
K
o
s
a
r
a
j
u
 
s
e
e
s
 
t
h
e
 
g
r
a
p
h
'
s
 
c
o
n
d
e
n
s
a
t
i
o
n
 
D
A
G
 
b
y
 
p
o
k
i
n
g
 
i
t
 
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
 
o
r
d
e
r
.
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
i
s
 
t
h
r
e
e
 
n
e
s
t
e
d
 
l
o
o
p
s
 
d
o
i
n
g
 
a
 
r
e
l
a
x
a
t
i
o
n
 
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
 
a
l
l
 
a
t
 
o
n
c
e
,
 
e
l
e
g
a
n
t
 
d
y
n
a
m
i
c
 
p
r
o
g
r
a
m
m
i
n
g
 
o
n
 
g
r
a
p
h
 
s
t
r
u
c
t
u
r
e
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
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
6
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
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
7
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
 
m
b
-
2
 
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
 
u
p
p
e
r
c
a
s
e
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
 
I
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
T
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
 
K
o
s
a
r
a
j
u
'
s
 
a
l
g
o
r
i
t
h
m
?
"
,
 
a
n
s
w
e
r
:
 
"
O
(
V
+
E
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
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
?
"
,
 
a
n
s
w
e
r
:
 
"
O
(
V
^
3
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
H
o
w
 
d
o
 
w
e
 
d
e
t
e
c
t
 
a
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
a
f
t
e
r
 
r
u
n
n
i
n
g
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
?
"
,
 
a
n
s
w
e
r
:
 
"
d
i
s
t
[
i
]
[
i
]
 
<
 
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
 
K
o
s
a
r
a
j
u
'
s
,
 
a
f
t
e
r
 
P
h
a
s
e
 
1
,
 
w
h
i
c
h
 
v
e
r
t
e
x
 
i
s
 
p
r
o
c
e
s
s
e
d
 
F
I
R
S
T
 
i
n
 
P
h
a
s
e
 
2
?
"
,
 
a
n
s
w
e
r
:
 
"
l
a
t
e
s
t
 
f
i
n
i
s
h
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
s
t
r
i
n
g
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
 
"
"
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
A
n
s
w
e
r
 
w
i
t
h
 
a
 
k
e
y
 
p
h
r
a
s
e
 
o
r
 
f
o
r
m
u
l
a
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
s
t
o
n
e
-
2
0
0
 
m
b
-
3
 
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
p
.
q
}
<
/
p
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


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
 
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
 
g
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
g
)
;
 
}
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
y
o
u
r
 
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
 
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
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
i
n
W
i
d
t
h
:
 
2
4
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
 
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
 
s
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
s
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
o
n
o
 
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
s
h
o
w
n
[
i
]
 
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
p
x
-
3
 
p
y
-
1
 
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
3
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
l
i
m
e
-
4
0
0
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
{
p
.
a
n
s
w
e
r
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
W
h
y
 
K
o
s
a
r
a
j
u
 
p
r
o
c
e
s
s
e
s
 
r
e
v
e
r
s
e
-
f
i
n
i
s
h
 
o
r
d
e
r
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
 
v
e
r
t
e
x
 
w
i
t
h
 
t
h
e
 
l
a
t
e
s
t
 
f
i
n
i
s
h
 
i
n
 
t
h
e
 
f
i
r
s
t
 
D
F
S
 
l
i
e
s
 
i
n
 
a
 
s
o
u
r
c
e
 
S
C
C
 
o
f
 
t
h
e
 
c
o
n
d
e
n
s
a
t
i
o
n
.
 
A
f
t
e
r
 
r
e
v
e
r
s
i
n
g
,
 
t
h
i
s
 
s
o
u
r
c
e
 
b
e
c
o
m
e
s
 
a
 
s
i
n
k
,
 
a
 
D
F
S
 
f
r
o
m
 
i
t
 
c
a
n
n
o
t
 
l
e
a
v
e
 
i
t
s
 
o
w
n
 
S
C
C
.
 
P
e
e
l
i
n
g
 
S
C
C
s
 
o
n
e
 
a
t
 
a
 
t
i
m
e
 
f
r
o
m
 
h
i
g
h
e
s
t
 
f
i
n
i
s
h
 
d
o
w
n
w
a
r
d
 
y
i
e
l
d
s
 
a
l
l
 
S
C
C
s
 
c
l
e
a
n
l
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
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
'
s
 
l
o
o
p
 
o
r
d
e
r
 
m
a
t
t
e
r
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


 
 
 
 
 
 
 
 
 
 
k
 
M
U
S
T
 
b
e
 
t
h
e
 
o
u
t
e
r
m
o
s
t
 
l
o
o
p
.
 
R
e
a
d
i
n
g
 
<
I
n
l
i
n
e
C
o
d
e
>
d
i
s
t
[
i
]
[
k
]
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
n
d
 
<
I
n
l
i
n
e
C
o
d
e
>
d
i
s
t
[
k
]
[
j
]
<
/
I
n
l
i
n
e
C
o
d
e
>
 
g
i
v
e
s
 
t
h
e
 
r
i
g
h
t
 
v
a
l
u
e
s
,
 
e
v
e
n
 
a
f
t
e
r
 
i
n
-
p
l
a
c
e
 
u
p
d
a
t
e
s
,
 
b
e
c
a
u
s
e
 
r
o
w
 
k
 
a
n
d
 
c
o
l
u
m
n
 
k
 
a
r
e
 
i
n
v
a
r
i
a
n
t
 
o
n
c
e
 
t
h
e
 
k
-
t
h
 
i
t
e
r
a
t
i
o
n
 
b
e
g
i
n
s
.
 
S
w
a
p
p
i
n
g
 
l
o
o
p
 
o
r
d
e
r
 
b
r
e
a
k
s
 
t
h
e
 
D
P
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
I
n
t
e
r
v
i
e
w
 
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


 
 
 
 
 
 
 
 
 
 
A
 
v
e
r
t
e
x
 
i
s
 
i
t
s
 
o
w
n
 
S
C
C
 
i
f
 
n
o
 
b
a
c
k
-
p
a
t
h
 
e
x
i
s
t
s
.
 
E
v
e
r
y
 
D
A
G
 
h
a
s
 
V
 
s
i
n
g
l
e
t
o
n
 
S
C
C
s
.
 
A
 
g
r
a
p
h
 
h
a
s
 
e
x
a
c
t
l
y
 
1
 
S
C
C
 
i
f
f
 
i
t
 
i
s
 
s
t
r
o
n
g
l
y
 
c
o
n
n
e
c
t
e
d
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
e
r
e
 
t
h
i
s
 
l
a
n
d
s
 
i
n
 
i
n
t
e
r
v
i
e
w
s
 
a
n
d
 
p
r
o
d
u
c
t
i
o
n
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
u
l
 
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
 
s
p
a
c
e
-
y
-
1
.
5
 
p
l
-
4
 
l
i
s
t
-
d
i
s
c
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
S
C
C
 
c
o
n
d
e
n
s
a
t
i
o
n
<
/
s
t
r
o
n
g
>
:
 
c
o
l
l
a
p
s
e
 
e
a
c
h
 
S
C
C
 
i
n
t
o
 
a
 
s
i
n
g
l
e
 
n
o
d
e
 
t
o
 
g
e
t
 
a
 
D
A
G
.
 
U
s
e
d
 
i
n
 
2
-
S
A
T
,
 
d
a
t
a
f
l
o
w
 
a
n
a
l
y
s
i
s
,
 
d
e
a
d
l
o
c
k
 
d
e
t
e
c
t
i
o
n
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
f
o
r
 
s
m
a
l
l
 
g
r
a
p
h
s
<
/
s
t
r
o
n
g
>
:
 
c
i
t
y
-
r
o
u
t
i
n
g
 
w
i
t
h
 
u
p
 
t
o
 
a
 
f
e
w
 
h
u
n
d
r
e
d
 
n
o
d
e
s
,
 
n
e
t
w
o
r
k
 
r
e
a
c
h
a
b
i
l
i
t
y
 
m
a
t
r
i
c
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
T
r
a
n
s
i
t
i
v
e
 
c
l
o
s
u
r
e
<
/
s
t
r
o
n
g
>
:
 
r
e
p
l
a
c
e
 
"
s
h
o
r
t
e
r
 
p
a
t
h
"
 
w
i
t
h
 
"
r
e
a
c
h
a
b
i
l
i
t
y
"
 
i
n
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
,
 
s
a
m
e
 
O
(
V
^
3
)
 
a
p
p
r
o
a
c
h
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
S
o
c
i
a
l
-
n
e
t
w
o
r
k
 
S
C
C
s
<
/
s
t
r
o
n
g
>
:
 
i
n
 
a
 
d
i
r
e
c
t
e
d
 
f
o
l
l
o
w
 
g
r
a
p
h
,
 
a
n
 
S
C
C
 
i
s
 
a
 
f
r
i
e
n
d
-
c
l
i
q
u
e
 
w
h
e
r
e
 
e
v
e
r
y
o
n
e
 
t
r
a
n
s
i
t
i
v
e
l
y
 
f
o
l
l
o
w
s
 
e
v
e
r
y
o
n
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
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
7
_
A
d
v
a
n
c
e
d
G
r
a
p
h
s
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
K
o
s
a
r
a
j
u
'
s
 
a
l
g
o
r
i
t
h
m
 
r
u
n
s
 
i
n
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
O
(
V
 
l
o
g
 
V
)
"
,
 
"
O
(
V
 
+
 
E
)
"
,
 
"
O
(
V
 
*
 
E
)
"
,
 
"
O
(
V
^
2
 
+
 
E
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
T
w
o
 
l
i
n
e
a
r
 
D
F
S
 
p
a
s
s
e
s
 
p
l
u
s
 
a
 
t
r
a
n
s
p
o
s
e
 
s
t
e
p
,
 
a
l
l
 
l
i
n
e
a
r
 
i
n
 
V
+
E
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
F
l
o
y
d
-
W
a
r
s
h
a
l
l
'
s
 
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
O
(
V
^
2
)
"
,
 
"
O
(
V
^
2
 
l
o
g
 
V
)
"
,
 
"
O
(
V
^
3
)
"
,
 
"
O
(
V
 
*
 
E
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
T
h
r
e
e
 
n
e
s
t
e
d
 
l
o
o
p
s
 
o
v
e
r
 
v
e
r
t
i
c
e
s
,
 
e
a
c
h
 
d
o
i
n
g
 
c
o
n
s
t
a
n
t
 
w
o
r
k
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
i
c
h
 
o
f
 
t
h
e
 
f
o
l
l
o
w
i
n
g
 
C
A
N
 
F
l
o
y
d
-
W
a
r
s
h
a
l
l
 
h
a
n
d
l
e
 
c
o
r
r
e
c
t
l
y
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
N
e
g
a
t
i
v
e
-
w
e
i
g
h
t
 
e
d
g
e
s
 
w
i
t
h
o
u
t
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
s
"
,
 
"
N
e
g
a
t
i
v
e
 
c
y
c
l
e
s
"
,
 
"
O
n
l
y
 
n
o
n
-
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
"
,
 
"
O
n
l
y
 
D
A
G
s
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
N
e
g
a
t
i
v
e
 
e
d
g
e
s
 
a
r
e
 
f
i
n
e
 
a
s
 
l
o
n
g
 
a
s
 
n
o
 
n
e
g
a
t
i
v
e
-
w
e
i
g
h
t
 
c
y
c
l
e
 
e
x
i
s
t
s
.
 
A
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
s
h
o
w
s
 
a
s
 
d
i
s
t
[
i
]
[
i
]
 
<
 
0
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
y
 
d
o
e
s
 
K
o
s
a
r
a
j
u
 
p
r
o
c
e
s
s
 
v
e
r
t
i
c
e
s
 
i
n
 
r
e
v
e
r
s
e
 
f
i
n
i
s
h
 
o
r
d
e
r
 
i
n
 
P
h
a
s
e
 
2
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
T
o
 
v
i
s
i
t
 
h
i
g
h
-
d
e
g
r
e
e
 
v
e
r
t
i
c
e
s
 
f
i
r
s
t
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
t
h
e
 
l
a
t
e
s
t
-
f
i
n
i
s
h
i
n
g
 
v
e
r
t
e
x
 
i
s
 
i
n
 
a
 
s
o
u
r
c
e
 
S
C
C
 
o
f
 
t
h
e
 
c
o
n
d
e
n
s
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
T
o
 
m
i
n
i
m
i
z
e
 
s
t
a
c
k
 
d
e
p
t
h
"
,


 
 
 
 
 
 
 
 
"
T
o
 
a
v
o
i
d
 
r
e
v
i
s
i
t
i
n
g
 
v
e
r
t
i
c
e
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
L
a
t
e
s
t
 
f
i
n
i
s
h
 
i
s
 
i
n
 
a
 
s
o
u
r
c
e
 
S
C
C
 
o
f
 
t
h
e
 
c
o
n
d
e
n
s
a
t
i
o
n
.
 
O
n
 
t
h
e
 
r
e
v
e
r
s
e
d
 
g
r
a
p
h
,
 
a
 
s
o
u
r
c
e
 
b
e
c
o
m
e
s
 
a
 
s
i
n
k
,
 
D
F
S
 
f
r
o
m
 
t
h
e
r
e
 
e
x
a
c
t
l
y
 
c
a
p
t
u
r
e
s
 
o
n
e
 
S
C
C
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
A
d
v
a
n
c
e
d
 
G
r
a
p
h
 
A
l
g
o
r
i
t
h
m
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
8
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
M
e
d
i
u
m
,
 
S
C
C
,
 
a
l
l
-
p
a
i
r
s
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
,
 
2
-
S
A
T
 
p
r
e
p
r
o
c
e
s
s
i
n
g
.
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
T
a
r
j
a
n
'
s
 
L
o
w
-
L
i
n
k
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


