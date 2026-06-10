
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
E
f
f
e
c
t
,
 
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
,
 
t
y
p
e
 
R
e
a
c
t
N
o
d
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
 
u
s
e
N
a
v
i
g
a
t
e
,
 
u
s
e
P
a
r
a
m
s
 
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
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
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
h
e
c
k
,


 
 
C
l
o
c
k
,


 
 
L
o
a
d
e
r
2
,


 
 
C
a
l
e
n
d
a
r
,


 
 
T
a
r
g
e
t
,


 
 
C
h
e
v
r
o
n
L
e
f
t
,


 
 
C
h
e
v
r
o
n
R
i
g
h
t
,


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
 
S
E
O
 
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
S
E
O
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
u
t
t
o
n
 
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
u
i
/
b
u
t
t
o
n
"
;


i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
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
N
a
v
b
a
r
"
;


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
S
t
u
d
e
n
t
S
i
d
e
b
a
r
 
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
S
t
u
d
e
n
t
S
i
d
e
b
a
r
"
;


i
m
p
o
r
t
 
a
p
i
 
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
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
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
u
i
/
t
o
a
s
t
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{


 
 
D
a
y
O
f
W
e
e
k
,


 
 
E
n
r
o
l
l
I
n
p
u
t
,


 
 
E
n
r
o
l
l
m
e
n
t
G
o
a
l
,


 
 
E
x
p
e
r
i
e
n
c
e
L
e
v
e
l
,


 
 
R
o
a
d
m
a
p
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
l
i
b
/
t
y
p
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
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
{
 
q
u
e
r
y
K
e
y
s
 
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
l
i
b
/
q
u
e
r
y
-
k
e
y
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
 
K
i
c
k
e
r
 
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
u
i
/
K
i
c
k
e
r
"
;




c
o
n
s
t
 
D
A
Y
S
:
 
D
a
y
O
f
W
e
e
k
[
]
 
=
 
[
"
M
O
N
"
,
 
"
T
U
E
"
,
 
"
W
E
D
"
,
 
"
T
H
U
"
,
 
"
F
R
I
"
,
 
"
S
A
T
"
,
 
"
S
U
N
"
]
;


c
o
n
s
t
 
D
A
Y
_
L
A
B
E
L
:
 
R
e
c
o
r
d
<
D
a
y
O
f
W
e
e
k
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


 
 
M
O
N
:
 
"
M
o
n
"
,
 
T
U
E
:
 
"
T
u
e
"
,
 
W
E
D
:
 
"
W
e
d
"
,
 
T
H
U
:
 
"
T
h
u
"
,
 
F
R
I
:
 
"
F
r
i
"
,
 
S
A
T
:
 
"
S
a
t
"
,
 
S
U
N
:
 
"
S
u
n
"
,


}
;




c
o
n
s
t
 
E
X
P
E
R
I
E
N
C
E
_
O
P
T
S
:
 
{
 
v
a
l
u
e
:
 
E
x
p
e
r
i
e
n
c
e
L
e
v
e
l
;
 
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
 
b
o
d
y
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
 
=
 
[


 
 
{
 
v
a
l
u
e
:
 
"
N
E
W
"
,
 
l
a
b
e
l
:
 
"
B
r
a
n
d
 
n
e
w
"
,
 
b
o
d
y
:
 
"
N
e
v
e
r
 
c
o
d
e
d
,
 
o
r
 
v
e
r
y
 
l
i
t
t
l
e
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
O
M
E
"
,
 
l
a
b
e
l
:
 
"
S
o
m
e
 
e
x
p
e
r
i
e
n
c
e
"
,
 
b
o
d
y
:
 
"
T
u
t
o
r
i
a
l
s
,
 
s
c
h
o
o
l
,
 
s
i
d
e
 
d
a
b
b
l
i
n
g
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
E
X
P
E
R
I
E
N
C
E
D
"
,
 
l
a
b
e
l
:
 
"
E
x
p
e
r
i
e
n
c
e
d
"
,
 
b
o
d
y
:
 
"
C
o
m
f
o
r
t
a
b
l
e
 
b
u
i
l
d
i
n
g
,
 
w
a
n
t
 
t
o
 
f
o
r
m
a
l
i
z
e
.
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
 
G
O
A
L
_
O
P
T
S
:
 
{
 
v
a
l
u
e
:
 
E
n
r
o
l
l
m
e
n
t
G
o
a
l
;
 
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
 
b
o
d
y
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
 
=
 
[


 
 
{
 
v
a
l
u
e
:
 
"
J
O
B
_
R
E
A
D
Y
"
,
 
l
a
b
e
l
:
 
"
G
e
t
 
j
o
b
 
r
e
a
d
y
"
,
 
b
o
d
y
:
 
"
B
u
i
l
d
 
a
 
p
o
r
t
f
o
l
i
o
 
t
h
a
t
 
l
a
n
d
s
 
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
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
I
D
E
_
P
R
O
J
E
C
T
"
,
 
l
a
b
e
l
:
 
"
B
u
i
l
d
 
a
 
s
i
d
e
 
p
r
o
j
e
c
t
"
,
 
b
o
d
y
:
 
"
I
 
h
a
v
e
 
a
n
 
i
d
e
a
 
a
n
d
 
w
a
n
t
 
t
o
 
s
h
i
p
 
i
t
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
C
H
O
O
L
"
,
 
l
a
b
e
l
:
 
"
S
c
h
o
o
l
 
/
 
c
o
u
r
s
e
w
o
r
k
"
,
 
b
o
d
y
:
 
"
R
e
i
n
f
o
r
c
e
 
w
h
a
t
 
I
'
m
 
l
e
a
r
n
i
n
g
 
i
n
 
c
l
a
s
s
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
C
U
R
I
O
U
S
"
,
 
l
a
b
e
l
:
 
"
C
u
r
i
o
u
s
 
l
e
a
r
n
e
r
"
,
 
b
o
d
y
:
 
"
I
 
j
u
s
t
 
w
a
n
t
 
t
o
 
u
n
d
e
r
s
t
a
n
d
 
h
o
w
 
t
h
i
s
 
s
t
a
c
k
 
w
o
r
k
s
.
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
 
S
T
E
P
S
 
=
 
[


 
 
{
 
i
d
:
 
0
,
 
l
a
b
e
l
:
 
"
p
a
c
e
"
,
 
t
i
t
l
e
:
 
"
P
i
c
k
 
y
o
u
r
 
p
a
c
e
"
,
 
b
o
d
y
:
 
"
W
e
'
l
l
 
b
u
i
l
d
 
a
 
w
e
e
k
l
y
 
p
l
a
n
 
f
r
o
m
 
t
h
i
s
 
a
n
d
 
e
m
a
i
l
 
y
o
u
 
a
 
P
D
F
.
"
 
}
,


 
 
{
 
i
d
:
 
1
,
 
l
a
b
e
l
:
 
"
d
a
y
s
"
,
 
t
i
t
l
e
:
 
"
P
i
c
k
 
y
o
u
r
 
d
a
y
s
"
,
 
b
o
d
y
:
 
"
T
e
l
l
s
 
u
s
 
w
h
e
n
 
t
o
 
r
e
c
o
m
m
e
n
d
 
s
t
u
d
y
 
s
e
s
s
i
o
n
s
.
"
 
}
,


 
 
{
 
i
d
:
 
2
,
 
l
a
b
e
l
:
 
"
y
o
u
"
,
 
t
i
t
l
e
:
 
"
A
 
b
i
t
 
a
b
o
u
t
 
y
o
u
"
,
 
b
o
d
y
:
 
"
H
e
l
p
s
 
u
s
 
t
u
n
e
 
r
e
c
o
m
m
e
n
d
a
t
i
o
n
s
.
"
 
}
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
 
C
h
r
o
m
e
(
{
 
c
h
i
l
d
r
e
n
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
 
}
:
 
{


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
N
o
d
e
;


 
 
s
i
d
e
b
a
r
W
i
d
t
h
:
 
n
u
m
b
e
r
;


 
 
c
o
l
l
a
p
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


 
 
s
i
d
e
b
a
r
:
 
R
e
a
c
t
N
o
d
e
;


}
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
m
i
n
-
h
-
s
c
r
e
e
n
 
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
h
i
d
d
e
n
 
l
g
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
s
i
d
e
b
a
r
O
f
f
s
e
t
=
{
s
i
d
e
b
a
r
W
i
d
t
h
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
l
g
:
h
i
d
d
e
n
"
>
<
N
a
v
b
a
r
 
/
>
<
/
d
i
v
>


 
 
 
 
 
 
{
s
i
d
e
b
a
r
}


 
 
 
 
 
 
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
{
`
p
t
-
1
6
 
l
g
:
p
t
-
2
4
 
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
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
 
$
{
c
o
l
l
a
p
s
e
d
 
?
 
"
l
g
:
m
l
-
1
8
"
 
:
 
"
l
g
:
m
l
-
6
4
"
}
`
}
>


 
 
 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
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
 
R
o
a
d
m
a
p
E
n
r
o
l
l
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
s
l
u
g
 
=
 
"
"
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
{
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
s
i
d
e
b
a
r
 
}
 
=
 
u
s
e
S
t
u
d
e
n
t
S
i
d
e
b
a
r
(
)
;


 
 
c
o
n
s
t
 
[
s
u
b
m
i
t
t
i
n
g
,
 
s
e
t
S
u
b
m
i
t
t
i
n
g
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
s
t
e
p
,
 
s
e
t
S
t
e
p
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
0
)
;




 
 
c
o
n
s
t
 
[
h
o
u
r
s
P
e
r
W
e
e
k
,
 
s
e
t
H
o
u
r
s
P
e
r
W
e
e
k
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
8
)
;


 
 
c
o
n
s
t
 
[
p
r
e
f
e
r
r
e
d
D
a
y
s
,
 
s
e
t
P
r
e
f
e
r
r
e
d
D
a
y
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
D
a
y
O
f
W
e
e
k
[
]
>
(
[
"
M
O
N
"
,
 
"
W
E
D
"
,
 
"
S
A
T
"
]
)
;


 
 
c
o
n
s
t
 
[
e
x
p
e
r
i
e
n
c
e
L
e
v
e
l
,
 
s
e
t
E
x
p
e
r
i
e
n
c
e
L
e
v
e
l
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
E
x
p
e
r
i
e
n
c
e
L
e
v
e
l
>
(
"
N
E
W
"
)
;


 
 
c
o
n
s
t
 
[
g
o
a
l
,
 
s
e
t
G
o
a
l
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
E
n
r
o
l
l
m
e
n
t
G
o
a
l
>
(
"
J
O
B
_
R
E
A
D
Y
"
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
r
o
a
d
m
a
p
D
a
t
a
,
 
i
s
L
o
a
d
i
n
g
:
 
r
o
a
d
m
a
p
L
o
a
d
i
n
g
,
 
i
s
E
r
r
o
r
:
 
r
o
a
d
m
a
p
E
r
r
o
r
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
r
o
a
d
m
a
p
s
.
d
e
t
a
i
l
(
s
l
u
g
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
<
{
 
r
o
a
d
m
a
p
:
 
R
o
a
d
m
a
p
 
}
>
(
`
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
`
)
.
t
h
e
n
(
r
e
s
 
=
>
 
r
e
s
.
d
a
t
a
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
s
l
u
g
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
1
5
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;


c
o
n
s
t
 
{
 
d
a
t
a
:
 
e
n
r
o
l
l
m
e
n
t
S
t
a
t
u
s
D
a
t
a
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
q
u
e
r
y
K
e
y
:
 
[
"
r
o
a
d
m
a
p
s
"
,
 
s
l
u
g
,
 
"
e
n
r
o
l
l
m
e
n
t
"
]
,


 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>


 
 
 
 
a
p
i


 
 
 
 
 
 
.
g
e
t
<
{
 
e
n
r
o
l
l
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
 
e
n
r
o
l
l
m
e
n
t
:
 
{
 
i
d
:
 
n
u
m
b
e
r
 
}
 
|
 
n
u
l
l
 
}
>
(


 
 
 
 
 
 
 
 
`
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
/
e
n
r
o
l
l
m
e
n
t
`
,


 
 
 
 
 
 
)


 
 
 
 
 
 
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
)
,


 
 
e
n
a
b
l
e
d
:
 
!
!
s
l
u
g
,


 
 
s
t
a
l
e
T
i
m
e
:
 
5
 
*
 
6
0
 
*
 
1
0
0
0
,


}
)
;




 
 
c
o
n
s
t
 
r
o
a
d
m
a
p
 
=
 
r
o
a
d
m
a
p
D
a
t
a
?
.
r
o
a
d
m
a
p
 
|
|
 
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
 
i
s
E
n
r
o
l
l
e
d
 
=
 
e
n
r
o
l
l
m
e
n
t
S
t
a
t
u
s
D
a
t
a
?
.
e
n
r
o
l
l
e
d
 
?
?
 
f
a
l
s
e
;


 
 
c
o
n
s
t
 
l
o
a
d
i
n
g
 
=
 
r
o
a
d
m
a
p
L
o
a
d
i
n
g
;




 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
i
f
 
(
i
s
E
n
r
o
l
l
e
d
)
 
{


 
 
 
 
n
a
v
i
g
a
t
e
(
`
/
l
e
a
r
n
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
`
,
 
{
 
r
e
p
l
a
c
e
:
 
t
r
u
e
 
}
)
;


 
 
}


}
,
 
[
i
s
E
n
r
o
l
l
e
d
,
 
s
l
u
g
,
 
n
a
v
i
g
a
t
e
]
)
;




 
 
c
o
n
s
t
 
t
a
r
g
e
t
W
e
e
k
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
!
r
o
a
d
m
a
p
)
 
r
e
t
u
r
n
 
0
;


 
 
 
 
r
e
t
u
r
n
 
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
 
M
a
t
h
.
c
e
i
l
(
r
o
a
d
m
a
p
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
 
/
 
h
o
u
r
s
P
e
r
W
e
e
k
)
)
;


 
 
}
,
 
[
r
o
a
d
m
a
p
,
 
h
o
u
r
s
P
e
r
W
e
e
k
]
)
;




 
 
c
o
n
s
t
 
t
a
r
g
e
t
E
n
d
D
a
t
e
 
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


 
 
 
 
c
o
n
s
t
 
d
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
 
 
d
.
s
e
t
D
a
t
e
(
d
.
g
e
t
D
a
t
e
(
)
 
+
 
t
a
r
g
e
t
W
e
e
k
s
 
*
 
7
)
;


 
 
 
 
r
e
t
u
r
n
 
d
;


 
 
}
,
 
[
t
a
r
g
e
t
W
e
e
k
s
]
)
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
D
a
y
 
=
 
(
d
:
 
D
a
y
O
f
W
e
e
k
)
 
=
>
 
{


 
 
 
 
s
e
t
P
r
e
f
e
r
r
e
d
D
a
y
s
(
(
p
r
e
v
)
 
=
>
 
p
r
e
v
.
i
n
c
l
u
d
e
s
(
d
)
 
?
 
p
r
e
v
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
x
 
!
=
=
 
d
)
 
:
 
[
.
.
.
p
r
e
v
,
 
d
]
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
u
b
m
i
t
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
p
r
e
f
e
r
r
e
d
D
a
y
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
P
i
c
k
 
a
t
 
l
e
a
s
t
 
o
n
e
 
d
a
y
"
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


 
 
 
 
s
e
t
S
u
b
m
i
t
t
i
n
g
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
b
o
d
y
:
 
E
n
r
o
l
l
I
n
p
u
t
 
=
 
{
 
h
o
u
r
s
P
e
r
W
e
e
k
,
 
p
r
e
f
e
r
r
e
d
D
a
y
s
,
 
e
x
p
e
r
i
e
n
c
e
L
e
v
e
l
,
 
g
o
a
l
 
}
;


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
`
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
/
e
n
r
o
l
l
`
,
 
b
o
d
y
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
Y
o
u
'
r
e
 
e
n
r
o
l
l
e
d
.
 
C
h
e
c
k
 
y
o
u
r
 
e
m
a
i
l
 
f
o
r
 
t
h
e
 
P
D
F
.
"
)
;


 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
`
/
l
e
a
r
n
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
`
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
s
g
 
=
 
(
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
)
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
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
C
o
u
l
d
 
n
o
t
 
e
n
r
o
l
l
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
m
s
g
)
;


 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
t
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
c
h
r
o
m
e
P
r
o
p
s
 
=
 
{
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
 
}
;




 
 
i
f
 
(
l
o
a
d
i
n
g
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
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
 
p
y
-
3
2
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
r
o
t
a
t
e
:
 
3
6
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
1
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
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
h
-
1
0
 
w
-
1
0
 
b
o
r
d
e
r
-
2
 
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
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
-
t
-
l
i
m
e
-
5
0
0
 
r
o
u
n
d
e
d
-
f
u
l
l
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
C
h
r
o
m
e
>


 
 
 
 
)
;


 
 
}


 
 
i
f
 
(
r
o
a
d
m
a
p
E
r
r
o
r
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
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
 
p
y
-
3
2
 
p
x
-
6
 
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
l
g
 
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
9
5
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
 
m
b
-
2
"
>
C
o
u
l
d
 
n
o
t
 
l
o
a
d
 
e
n
r
o
l
l
m
e
n
t
 
d
a
t
a
<
/
p
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
5
0
0
 
m
b
-
6
"
>
T
h
e
r
e
 
w
a
s
 
a
 
p
r
o
b
l
e
m
 
c
o
n
n
e
c
t
i
n
g
 
t
o
 
t
h
e
 
s
e
r
v
e
r
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
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
 
w
i
n
d
o
w
.
l
o
c
a
t
i
o
n
.
r
e
l
o
a
d
(
)
}
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
"
 
s
i
z
e
=
"
s
m
"
>
R
e
t
r
y
<
/
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


 
 
 
 
 
 
<
/
C
h
r
o
m
e
>


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
!
r
o
a
d
m
a
p
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
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
 
p
y
-
3
2
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
R
o
a
d
m
a
p
 
n
o
t
 
f
o
u
n
d
.


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
C
h
r
o
m
e
>


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
=
 
(
(
s
t
e
p
 
+
 
1
)
 
/
 
S
T
E
P
S
.
l
e
n
g
t
h
)
 
*
 
1
0
0
;


 
 
c
o
n
s
t
 
c
a
n
P
r
o
c
e
e
d
 
=
 
s
t
e
p
 
!
=
=
 
1
 
|
|
 
p
r
e
f
e
r
r
e
d
D
a
y
s
.
l
e
n
g
t
h
 
>
 
0
;


 
 
c
o
n
s
t
 
s
t
e
p
M
e
t
a
 
=
 
S
T
E
P
S
[
s
t
e
p
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
}
>


 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
{
`
E
n
r
o
l
l
:
 
$
{
r
o
a
d
m
a
p
.
t
i
t
l
e
}
`
}
 
n
o
I
n
d
e
x
 
/
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
r
e
l
a
t
i
v
e
 
m
a
x
-
w
-
3
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
b
-
1
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
D
e
c
o
r
a
t
i
v
e
 
g
r
a
d
i
e
n
t
 
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
 
*
/
}


 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
-
z
-
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
4
0
 
l
e
f
t
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
x
-
1
/
2
 
w
-
2
0
0
 
h
-
1
5
0
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
l
i
m
e
-
1
0
0
 
v
i
a
-
t
r
a
n
s
p
a
r
e
n
t
 
t
o
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
 
d
a
r
k
:
f
r
o
m
-
l
i
m
e
-
9
0
0
/
2
0
 
d
a
r
k
:
v
i
a
-
t
r
a
n
s
p
a
r
e
n
t
 
d
a
r
k
:
t
o
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
/
3
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
6
0
"
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
/
*
 
R
o
a
d
m
a
p
 
e
y
e
b
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
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
m
t
-
2
 
m
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
 
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
b
-
3
"
>
e
n
r
o
l
l
i
n
g
 
i
n
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
d
i
s
p
l
a
y
 
t
e
x
t
-
2
x
l
 
s
m
:
t
e
x
t
-
3
x
l
 
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
r
a
c
k
i
n
g
-
t
i
g
h
t
 
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
5
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
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
a
d
m
a
p
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
 
p
r
o
g
r
e
s
s
 
i
n
d
i
c
a
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
0
5
 
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
m
b
-
8
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
"
 
r
o
l
e
=
"
l
i
s
t
"
 
a
r
i
a
-
l
a
b
e
l
=
"
E
n
r
o
l
l
m
e
n
t
 
s
t
e
p
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
o
n
e
 
=
 
s
.
i
d
 
<
 
s
t
e
p
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
 
s
.
i
d
 
=
=
=
 
s
t
e
p
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
s
.
i
d
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
f
l
e
x
-
1
"
 
r
o
l
e
=
"
l
i
s
t
i
t
e
m
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
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n
=
"
t
r
u
e
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
{
`
h
-
5
 
w
-
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
a
b
u
l
a
r
-
n
u
m
s
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
5
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
9
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
d
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
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
9
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
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
g
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
n
e
 
?
 
<
C
h
e
c
k
 
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
 
h
-
3
"
 
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
3
}
 
/
>
 
:
 
s
.
i
d
 
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
{
`
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
 
u
p
p
e
r
c
a
s
e
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
c
u
r
r
e
n
t
=
{
a
c
t
i
v
e
 
?
 
"
s
t
e
p
"
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
l
a
b
e
l
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
h
-
0
.
5
 
w
-
f
u
l
l
 
b
g
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
g
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
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
f
u
l
l
"
 
a
r
i
a
-
h
i
d
d
e
n
=
"
t
r
u
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
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
h
-
f
u
l
l
 
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
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
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
 
d
o
n
e
 
?
 
"
1
0
0
%
"
 
:
 
a
c
t
i
v
e
 
?
 
"
5
0
%
"
 
:
 
"
0
%
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
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
m
t
-
2
 
t
e
x
t
-
r
i
g
h
t
 
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
 
u
p
p
e
r
c
a
s
e
 
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
a
b
u
l
a
r
-
n
u
m
s
"
 
a
r
i
a
-
l
i
v
e
=
"
p
o
l
i
t
e
"
 
a
r
i
a
-
a
t
o
m
i
c
=
"
t
r
u
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
M
a
t
h
.
r
o
u
n
d
(
p
r
o
g
r
e
s
s
)
}
%
 
/
 
s
t
e
p
 
{
s
t
e
p
 
+
 
1
}
 
o
f
 
{
S
T
E
P
S
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
 
b
o
d
y
 
*
/
}


 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
-
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
5
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
3
x
l
 
s
m
:
t
e
x
t
-
4
x
l
 
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
r
a
c
k
i
n
g
-
t
i
g
h
t
 
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
5
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
M
e
t
a
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
 
m
b
-
8
"
>
{
s
t
e
p
M
e
t
a
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




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
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
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
p
-
6
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
 
i
t
e
m
s
-
b
a
s
e
l
i
n
e
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
5
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
 
u
p
p
e
r
c
a
s
e
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
o
u
r
s
 
p
e
r
 
w
e
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
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
o
u
r
s
P
e
r
W
e
e
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
s
c
a
l
e
:
 
1
.
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
1
8
 
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
4
x
l
 
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
9
5
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
o
u
r
s
P
e
r
W
e
e
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
a
s
e
 
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
n
o
r
m
a
l
 
m
l
-
1
"
>
h
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
r
a
n
g
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
e
p
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
h
o
u
r
s
P
e
r
W
e
e
k
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
H
o
u
r
s
P
e
r
W
e
e
k
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
`
H
o
u
r
s
 
p
e
r
 
w
e
e
k
:
 
$
{
h
o
u
r
s
P
e
r
W
e
e
k
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
v
a
l
u
e
m
i
n
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
v
a
l
u
e
m
a
x
=
{
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
v
a
l
u
e
n
o
w
=
{
h
o
u
r
s
P
e
r
W
e
e
k
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
 
a
c
c
e
n
t
-
l
i
m
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
m
t
-
2
 
f
l
e
x
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
t
e
x
t
-
[
9
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
2
h
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
2
0
h
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
4
0
h
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
3
 
g
a
p
-
3
 
m
t
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
i
c
o
n
=
{
C
l
o
c
k
}
 
l
a
b
e
l
=
"
T
o
t
a
l
"
 
v
a
l
u
e
=
{
`
$
{
r
o
a
d
m
a
p
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
h
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
i
c
o
n
=
{
C
a
l
e
n
d
a
r
}
 
l
a
b
e
l
=
"
W
e
e
k
s
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
t
a
r
g
e
t
W
e
e
k
s
)
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
T
a
r
g
e
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
F
i
n
i
s
h
 
b
y
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
E
n
d
D
a
t
e
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
{
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
 
}
)
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
1
 
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
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
p
-
6
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
7
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
D
A
Y
S
.
m
a
p
(
(
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
c
t
i
v
e
 
=
 
p
r
e
f
e
r
r
e
d
D
a
y
s
.
i
n
c
l
u
d
e
s
(
d
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
m
o
t
i
o
n
.
b
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
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
o
g
g
l
e
D
a
y
(
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
p
r
e
s
s
e
d
=
{
a
c
t
i
v
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
`
$
{
D
A
Y
_
L
A
B
E
L
[
d
]
}
$
{
a
c
t
i
v
e
 
?
 
"
,
 
s
e
l
e
c
t
e
d
"
 
:
 
"
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
0
5
 
+
 
i
 
*
 
0
.
0
4
,
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
6
 
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
{
`
h
-
1
4
 
r
o
u
n
d
e
d
-
x
l
 
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
b
o
l
d
 
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
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
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
9
5
0
 
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
w
h
i
t
e
 
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
7
0
0
 
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
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
D
A
Y
_
L
A
B
E
L
[
d
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
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
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
i
c
k
 
t
h
e
 
d
a
y
s
 
y
o
u
 
c
a
n
 
r
e
a
l
i
s
t
i
c
a
l
l
y
 
s
t
u
d
y
.
 
W
e
'
l
l
 
p
a
c
e
 
y
o
u
r
 
w
e
e
k
 
a
r
o
u
n
d
 
t
h
e
s
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
f
e
r
r
e
d
D
a
y
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
x
s
 
t
e
x
t
-
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
m
t
-
2
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
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
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
i
c
k
 
a
t
 
l
e
a
s
t
 
o
n
e
 
d
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
2
 
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
s
p
a
c
e
-
y
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
 
u
p
p
e
r
c
a
s
e
 
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
p
e
r
i
e
n
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
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
3
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
E
X
P
E
R
I
E
N
C
E
_
O
P
T
S
.
m
a
p
(
(
o
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
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
o
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
E
x
p
e
r
i
e
n
c
e
L
e
v
e
l
(
o
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
p
r
e
s
s
e
d
=
{
e
x
p
e
r
i
e
n
c
e
L
e
v
e
l
 
=
=
=
 
o
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
0
5
 
+
 
i
 
*
 
0
.
0
4
,
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
8
 
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
{
`
t
e
x
t
-
l
e
f
t
 
r
o
u
n
d
e
d
-
x
l
 
p
-
4
 
b
o
r
d
e
r
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
p
e
r
i
e
n
c
e
L
e
v
e
l
 
=
=
=
 
o
.
v
a
l
u
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
9
5
0
/
3
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
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
8
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
s
t
o
n
e
-
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
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
9
5
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
{
o
.
l
a
b
e
l
}
<
/
p
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
 
m
t
-
1
 
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
o
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
m
o
t
i
o
n
.
b
u
t
t
o
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
 
u
p
p
e
r
c
a
s
e
 
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
 
m
b
-
3
"
>
g
o
a
l
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
g
r
i
d
 
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
G
O
A
L
_
O
P
T
S
.
m
a
p
(
(
o
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
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
o
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
G
o
a
l
(
o
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
p
r
e
s
s
e
d
=
{
g
o
a
l
 
=
=
=
 
o
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
1
 
+
 
i
 
*
 
0
.
0
4
,
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
8
 
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
{
`
t
e
x
t
-
l
e
f
t
 
r
o
u
n
d
e
d
-
x
l
 
p
-
4
 
b
o
r
d
e
r
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
o
a
l
 
=
=
=
 
o
.
v
a
l
u
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
9
5
0
/
3
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
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
8
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
s
t
o
n
e
-
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
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
9
5
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
{
o
.
l
a
b
e
l
}
<
/
p
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
 
m
t
-
1
 
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
o
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
m
o
t
i
o
n
.
b
u
t
t
o
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
i
n
a
l
 
s
u
m
m
a
r
y
 
c
a
r
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
2
,
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
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
5
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
9
5
0
 
r
o
u
n
d
e
d
-
2
x
l
 
p
-
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
u
p
p
e
r
c
a
s
e
 
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
 
o
p
a
c
i
t
y
-
6
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
o
u
r
 
p
l
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
l
e
x
-
w
r
a
p
 
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
x
-
4
 
g
a
p
-
y
-
1
 
t
e
x
t
-
s
m
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
f
o
n
t
-
b
o
l
d
"
>
{
h
o
u
r
s
P
e
r
W
e
e
k
}
h
<
/
s
t
r
o
n
g
>
/
w
e
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
p
a
c
i
t
y
-
5
0
"
>
·
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
f
o
n
t
-
b
o
l
d
"
>
{
t
a
r
g
e
t
W
e
e
k
s
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
 
w
e
e
k
s
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
o
p
a
c
i
t
y
-
5
0
"
>
·
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
f
i
n
i
s
h
 
b
y
 
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
f
o
n
t
-
b
o
l
d
"
>
{
t
a
r
g
e
t
E
n
d
D
a
t
e
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
{
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
 
}
)
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
x
s
 
o
p
a
c
i
t
y
-
7
0
 
m
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
n
 
e
n
r
o
l
l
m
e
n
t
 
w
e
'
l
l
 
e
m
a
i
l
 
y
o
u
 
a
 
P
D
F
 
w
i
t
h
 
t
h
e
 
f
u
l
l
 
p
l
a
n
,
 
w
e
e
k
-
1
 
t
o
p
i
c
s
,
 
a
n
d
 
c
u
r
a
t
e
d
 
r
e
s
o
u
r
c
e
s
.
 
W
e
 
c
h
e
c
k
 
i
n
 
o
n
 
d
a
y
 
1
0
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>




 
 
 
 
 
 
 
 
{
/
*
 
N
a
v
 
b
u
t
t
o
n
s
 
*
/
}


 
 
 
 
 
 
 
 
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
t
-
8
"
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
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
 
s
e
t
S
t
e
p
(
(
s
)
 
=
>
 
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
 
s
 
-
 
1
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
t
e
p
 
=
=
=
 
0
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
L
e
f
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


 
 
 
 
 
 
 
 
 
 
 
 
B
a
c
k


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
<
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
m
o
n
o
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
 
s
e
t
S
t
e
p
(
(
s
)
 
=
>
 
s
 
+
 
1
)
}
 
d
i
s
a
b
l
e
d
=
{
!
c
a
n
P
r
o
c
e
e
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
m
o
n
o
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
s
u
b
m
i
t
}
 
d
i
s
a
b
l
e
d
=
{
s
u
b
m
i
t
t
i
n
g
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
b
m
i
t
t
i
n
g
 
?
 
<
L
o
a
d
e
r
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
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
:
 
<
C
h
e
c
k
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
n
r
o
l
l
,
 
e
m
a
i
l
 
m
e
 
t
h
e
 
P
D
F


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
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
d
i
v
>


 
 
 
 
<
/
C
h
r
o
m
e
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
 
S
t
a
t
(
{


 
 
i
c
o
n
:
 
I
c
o
n
,


 
 
l
a
b
e
l
,


 
 
v
a
l
u
e
,


}
:
 
{


 
 
i
c
o
n
:
 
t
y
p
e
o
f
 
C
l
o
c
k
;


 
 
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
;


}
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
8
0
0
/
5
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
s
t
o
n
e
-
1
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
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
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
 
t
e
x
t
-
[
9
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
 
u
p
p
e
r
c
a
s
e
 
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
<
I
c
o
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
d
i
v
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
b
a
s
e
 
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
9
5
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>
{
v
a
l
u
e
}
<
/
p
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


