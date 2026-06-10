
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
 
L
i
n
k
 
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
C
i
r
c
l
e
2
,


 
 
A
r
r
o
w
R
i
g
h
t
,


 
 
B
o
o
k
O
p
e
n
,


 
 
T
r
e
n
d
i
n
g
U
p
,


 
 
S
t
a
r
,


 
 
L
o
c
k
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
 
s
e
c
t
i
o
n
s
,
 
l
e
s
s
o
n
s
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
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
 
F
a
s
t
A
p
i
P
r
o
g
r
e
s
s
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
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
 
c
a
n
o
n
i
c
a
l
U
r
l
,
 
S
I
T
E
_
U
R
L
 
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
s
e
o
.
u
t
i
l
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


 
 
c
o
u
r
s
e
S
c
h
e
m
a
,


 
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
,


 
 
f
a
q
S
c
h
e
m
a
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
s
t
r
u
c
t
u
r
e
d
-
d
a
t
a
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
A
u
t
h
S
t
o
r
e
 
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
a
u
t
h
.
s
t
o
r
e
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
o
g
i
n
G
a
t
e
 
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
L
o
g
i
n
G
a
t
e
"
;




c
o
n
s
t
 
F
R
E
E
_
L
I
M
I
T
 
=
 
5
;




f
u
n
c
t
i
o
n
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
:
 
F
a
s
t
A
p
i
P
r
o
g
r
e
s
s
 
{


 
 
t
r
y
 
{


 
 
 
 
r
e
t
u
r
n
 
J
S
O
N
.
p
a
r
s
e
(
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
"
f
a
s
t
a
p
i
-
p
r
o
g
r
e
s
s
"
)
 
|
|
 
"
{
}
"
)
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
{
}
;


 
 
}


}




c
o
n
s
t
 
L
E
V
E
L
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


 
 
B
e
g
i
n
n
e
r
:
 
"
t
e
x
t
-
e
m
e
r
a
l
d
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
e
m
e
r
a
l
d
-
4
0
0
"
,


 
 
I
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
:
 
"
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
"
,


 
 
A
d
v
a
n
c
e
d
:
 
"
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
r
o
s
e
-
4
0
0
"
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
 
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
(
{
 
p
r
o
g
r
e
s
s
 
}
:
 
{
 
p
r
o
g
r
e
s
s
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
r
 
=
 
2
6
;


 
 
c
o
n
s
t
 
c
i
r
c
 
=
 
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
 
r
;


 
 
c
o
n
s
t
 
o
f
f
s
e
t
 
=
 
c
i
r
c
 
-
 
(
p
r
o
g
r
e
s
s
 
/
 
1
0
0
)
 
*
 
c
i
r
c
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
r
e
l
a
t
i
v
e
 
w
-
1
4
 
h
-
1
4
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
<
s
v
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
w
-
1
4
 
h
-
1
4
 
-
r
o
t
a
t
e
-
9
0
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
6
4
 
6
4
"
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
"
3
2
"


 
 
 
 
 
 
 
 
 
 
c
y
=
"
3
2
"


 
 
 
 
 
 
 
 
 
 
r
=
{
r
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
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
"
s
t
r
o
k
e
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
s
t
r
o
k
e
-
w
h
i
t
e
/
1
0
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
"
4
"


 
 
 
 
 
 
 
 
/
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
"
3
2
"


 
 
 
 
 
 
 
 
 
 
c
y
=
"
3
2
"


 
 
 
 
 
 
 
 
 
 
r
=
{
r
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
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
"
s
t
r
o
k
e
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
"
4
"


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
L
i
n
e
c
a
p
=
"
r
o
u
n
d
"


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
`
$
{
c
i
r
c
}
`
}


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
o
f
f
s
e
t
=
{
o
f
f
s
e
t
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
-
d
a
s
h
o
f
f
s
e
t
 
0
.
6
s
 
e
a
s
e
"
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
s
v
g
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
1
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


 
 
 
 
 
 
 
 
{
p
r
o
g
r
e
s
s
}
%


 
 
 
 
 
 
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
 
F
a
s
t
A
p
i
L
e
s
s
o
n
s
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
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
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
G
a
t
e
,
 
s
e
t
S
h
o
w
G
a
t
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
 
p
r
o
g
r
e
s
s
:
 
F
a
s
t
A
p
i
P
r
o
g
r
e
s
s
 
=
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
;




 
 
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
S
t
a
t
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


 
 
 
 
r
e
t
u
r
n
 
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
e
c
t
i
o
n
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
e
c
t
i
o
n
L
e
s
s
o
n
s
 
=
 
l
e
s
s
o
n
s
.
f
i
l
t
e
r
(
(
l
)
 
=
>
 
l
.
s
e
c
t
i
o
n
I
d
 
=
=
=
 
s
e
c
t
i
o
n
.
i
d
)
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
l
e
t
e
d
 
=
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
.
f
i
l
t
e
r
(


 
 
 
 
 
 
 
 
(
l
)
 
=
>
 
p
r
o
g
r
e
s
s
[
l
.
i
d
]
?
.
c
o
m
p
l
e
t
e
d
,


 
 
 
 
 
 
)
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
 
t
o
t
a
l
 
=
 
s
e
c
t
i
o
n
L
e
s
s
o
n
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
 
h
a
s
I
n
t
e
r
v
i
e
w
 
=
 
s
e
c
t
i
o
n
L
e
s
s
o
n
s
.
s
o
m
e
(
(
l
)
 
=
>
 
l
.
i
s
I
n
t
e
r
v
i
e
w
Q
u
e
s
t
i
o
n
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
s
e
c
t
i
o
n
,
 
c
o
m
p
l
e
t
e
d
,
 
t
o
t
a
l
,
 
h
a
s
I
n
t
e
r
v
i
e
w
 
}
;


 
 
 
 
}
)
;


 
 
}
,
 
[
p
r
o
g
r
e
s
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
t
a
l
C
o
m
p
l
e
t
e
d
 
=
 
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
r
o
g
r
e
s
s
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
p
)
 
=
>
 
p
.
c
o
m
p
l
e
t
e
d
,


 
 
)
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
 
t
o
t
a
l
L
e
s
s
o
n
s
 
=
 
l
e
s
s
o
n
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
 
o
v
e
r
a
l
l
P
c
t
 
=


 
 
 
 
t
o
t
a
l
L
e
s
s
o
n
s
 
>
 
0
 
?
 
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
(
t
o
t
a
l
C
o
m
p
l
e
t
e
d
 
/
 
t
o
t
a
l
L
e
s
s
o
n
s
)
 
*
 
1
0
0
)
 
:
 
0
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
 
m
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
"
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
"
L
e
a
r
n
 
F
a
s
t
A
P
I
,
 
F
r
e
e
 
I
n
t
e
r
a
c
t
i
v
e
 
T
u
t
o
r
i
a
l
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
M
a
s
t
e
r
 
F
a
s
t
A
P
I
 
w
i
t
h
 
i
n
t
e
r
a
c
t
i
v
e
 
l
e
s
s
o
n
s
 
c
o
v
e
r
i
n
g
 
a
s
y
n
c
 
e
n
d
p
o
i
n
t
s
,
 
P
y
d
a
n
t
i
c
 
m
o
d
e
l
s
,
 
d
e
p
e
n
d
e
n
c
y
 
i
n
j
e
c
t
i
o
n
,
 
a
n
d
 
i
n
t
e
r
v
i
e
w
 
p
r
e
p
a
r
a
t
i
o
n
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
l
e
a
r
n
 
f
a
s
t
a
p
i
,
 
f
a
s
t
a
p
i
 
t
u
t
o
r
i
a
l
,
 
f
a
s
t
a
p
i
 
l
e
s
s
o
n
s
,
 
a
s
y
n
c
,
 
p
y
d
a
n
t
i
c
,
 
R
E
S
T
 
A
P
I
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
l
e
a
r
n
/
f
a
s
t
a
p
i
"
)
}


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
[


 
 
 
 
 
 
 
 
 
 
c
o
u
r
s
e
S
c
h
e
m
a
(
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
L
e
a
r
n
 
F
a
s
t
A
P
I
,
 
F
r
e
e
 
I
n
t
e
r
a
c
t
i
v
e
 
T
u
t
o
r
i
a
l
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
M
a
s
t
e
r
 
F
a
s
t
A
P
I
 
w
i
t
h
 
i
n
t
e
r
a
c
t
i
v
e
 
l
e
s
s
o
n
s
 
c
o
v
e
r
i
n
g
 
a
s
y
n
c
 
e
n
d
p
o
i
n
t
s
,
 
P
y
d
a
n
t
i
c
 
m
o
d
e
l
s
,
 
d
e
p
e
n
d
e
n
c
y
 
i
n
j
e
c
t
i
o
n
,
 
a
n
d
 
i
n
t
e
r
v
i
e
w
 
p
r
e
p
a
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
/
f
a
s
t
a
p
i
`
,


 
 
 
 
 
 
 
 
 
 
}
)
,


 
 
 
 
 
 
 
 
 
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
(
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
H
o
m
e
"
,
 
u
r
l
:
 
S
I
T
E
_
U
R
L
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
L
e
a
r
n
"
,
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
`
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
F
a
s
t
A
P
I
"
,
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
/
f
a
s
t
a
p
i
`
 
}
,


 
 
 
 
 
 
 
 
 
 
]
)
,


 
 
 
 
 
 
 
 
 
 
f
a
q
S
c
h
e
m
a
(
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
I
s
 
t
h
i
s
 
F
a
s
t
A
P
I
 
c
o
u
r
s
e
 
f
r
e
e
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
Y
e
s
,
 
t
h
e
 
F
a
s
t
A
P
I
 
c
o
u
r
s
e
 
o
n
 
I
n
t
e
r
n
H
a
c
k
 
i
s
 
c
o
m
p
l
e
t
e
l
y
 
f
r
e
e
 
w
i
t
h
 
n
o
 
s
i
g
n
-
u
p
 
r
e
q
u
i
r
e
d
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
a
t
 
w
i
l
l
 
I
 
l
e
a
r
n
 
i
n
 
t
h
i
s
 
F
a
s
t
A
P
I
 
c
o
u
r
s
e
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
Y
o
u
 
w
i
l
l
 
l
e
a
r
n
 
p
a
t
h
 
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
,
 
r
e
q
u
e
s
t
 
m
o
d
e
l
s
 
w
i
t
h
 
P
y
d
a
n
t
i
c
,
 
d
e
p
e
n
d
e
n
c
y
 
i
n
j
e
c
t
i
o
n
,
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n
,
 
a
n
d
 
b
u
i
l
d
i
n
g
 
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
-
r
e
a
d
y
 
A
P
I
s
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
D
o
 
I
 
n
e
e
d
 
t
o
 
k
n
o
w
 
P
y
t
h
o
n
 
b
e
f
o
r
e
 
l
e
a
r
n
i
n
g
 
F
a
s
t
A
P
I
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
Y
e
s
,
 
P
y
t
h
o
n
 
k
n
o
w
l
e
d
g
e
 
i
n
c
l
u
d
i
n
g
 
t
y
p
e
 
h
i
n
t
s
 
i
s
 
r
e
q
u
i
r
e
d
 
b
e
f
o
r
e
 
s
t
a
r
t
i
n
g
 
t
h
e
 
F
a
s
t
A
P
I
 
c
o
u
r
s
e
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
]
)
,


 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
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
a
x
-
w
-
4
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
4
 
s
m
:
p
x
-
8
 
p
y
-
8
"
>


 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
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
 
1
2
 
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
2
 
m
b
-
2
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
-
1
 
w
-
1
 
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
"
>
<
/
d
i
v
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
a
r
n
 
/
 
f
a
s
t
a
p
i


 
 
 
 
 
 
 
 
 
 
 
 
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
e
n
d
 
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
 
g
a
p
-
4
 
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
w
-
0
"
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
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
h
i
p
 
h
i
g
h
-
p
e
r
f
o
r
m
a
n
c
e
 
A
P
I
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
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
 
m
a
x
-
w
-
2
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
t
e
r
a
c
t
i
v
e
 
F
a
s
t
A
P
I
 
l
e
s
s
o
n
s
,
 
c
u
r
a
t
e
d
 
f
o
r
 
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
 
A
s
y
n
c


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
n
d
p
o
i
n
t
s
,
 
P
y
d
a
n
t
i
c
,
 
d
e
p
e
n
d
e
n
c
i
e
s
,
 
d
e
p
l
o
y
m
e
n
t
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
C
o
m
p
l
e
t
e
d
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
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
t
o
t
a
l
L
e
s
s
o
n
s
}
 
d
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
1
 
w
-
1
 
b
g
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
g
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
"
 
/
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
v
e
r
a
l
l
P
c
t
}
%
 
c
o
m
p
l
e
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
t
s
 
s
t
r
i
p
 
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
 
1
2
 
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
3
 
g
a
p
-
0
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
l
 
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
 
m
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
B
o
o
k
O
p
e
n
,
 
v
a
l
u
e
:
 
t
o
t
a
l
L
e
s
s
o
n
s
,
 
l
a
b
e
l
:
 
"
l
e
s
s
o
n
s
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
T
r
e
n
d
i
n
g
U
p
,
 
v
a
l
u
e
:
 
t
o
t
a
l
C
o
m
p
l
e
t
e
d
,
 
l
a
b
e
l
:
 
"
c
o
m
p
l
e
t
e
d
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
v
a
l
u
e
:
 
`
$
{
o
v
e
r
a
l
l
P
c
t
}
%
`
,
 
l
a
b
e
l
:
 
"
o
v
e
r
a
l
l
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
s
t
a
t
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
s
t
a
t
.
l
a
b
e
l
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
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
 
p
-
3
 
s
m
:
p
-
4
 
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
-
r
 
b
o
r
d
e
r
-
b
 
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
w
-
8
 
h
-
8
 
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
g
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
g
-
w
h
i
t
e
/
5
 
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
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
a
t
.
i
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
4
 
h
-
4
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
.
v
a
l
u
e
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
s
t
a
t
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
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




 
 
 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
s
 
l
i
s
t
 
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
 
g
a
p
-
2
 
m
b
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
h
-
1
 
w
-
1
 
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
"
>
<
/
d
i
v
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
i
c
u
l
u
m
 
/
 
{
s
e
c
t
i
o
n
S
t
a
t
s
.
l
e
n
g
t
h
}
 
s
e
c
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
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
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
S
t
a
t
s
.
m
a
p
(
(
s
e
c
t
i
o
n
,
 
i
d
x
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
c
t
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
c
t
i
o
n
.
t
o
t
a
l
 
>
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
(
s
e
c
t
i
o
n
.
c
o
m
p
l
e
t
e
d
 
/
 
s
e
c
t
i
o
n
.
t
o
t
a
l
)
 
*
 
1
0
0
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
a
s
e
P
a
t
h
 
=
 
"
/
l
e
a
r
n
/
f
a
s
t
a
p
i
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
p
l
e
t
e
 
=
 
p
c
t
 
=
=
=
 
1
0
0
 
&
&
 
s
e
c
t
i
o
n
.
t
o
t
a
l
 
>
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
L
o
c
k
e
d
 
=
 
i
d
x
 
>
=
 
F
R
E
E
_
L
I
M
I
T
 
&
&
 
!
i
s
A
u
t
h
e
n
t
i
c
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
 
s
e
c
t
i
o
n
N
u
m
 
=
 
S
t
r
i
n
g
(
i
d
x
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
;




 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
n
n
e
r
 
=
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
g
a
p
-
1
.
5
 
s
h
r
i
n
k
-
0
 
w
-
1
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
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
w
-
1
4
 
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
m
d
 
b
g
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
g
-
w
h
i
t
e
/
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
 
p
r
o
g
r
e
s
s
=
{
p
c
t
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
s
e
c
t
i
o
n
N
u
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
-
1
 
m
i
n
-
w
-
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
 
f
l
e
x
-
w
r
a
p
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
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
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
m
p
l
e
t
e
 
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
 
p
x
-
1
.
5
 
p
y
-
0
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
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
h
a
s
I
n
t
e
r
v
i
e
w
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
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
w
-
3
.
5
 
h
-
3
.
5
 
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
5
0
0
 
f
i
l
l
-
l
i
m
e
-
4
0
0
 
s
h
r
i
n
k
-
0
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
I
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
m
b
-
2
.
5
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
i
s
L
o
c
k
e
d
 
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
w
-
f
u
l
l
 
h
-
0
.
5
 
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
w
h
i
t
e
/
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
 
m
b
-
2
.
5
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
 
`
$
{
p
c
t
}
%
`
 
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
6
,
 
d
e
l
a
y
:
 
0
.
1
5
 
+
 
i
d
x
 
*
 
0
.
0
3
 
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
f
u
l
l
 
$
{
i
s
C
o
m
p
l
e
t
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
"
 
:
 
p
c
t
 
>
 
0
 
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
5
0
"
 
:
 
"
b
g
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
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
`
$
{
s
e
c
t
i
o
n
.
t
o
t
a
l
}
 
l
e
s
s
o
n
s
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
c
o
m
p
l
e
t
e
d
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
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
s
e
c
t
i
o
n
.
t
o
t
a
l
}
 
l
e
s
s
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
h
-
1
 
w
-
1
 
b
g
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
g
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
"
 
/
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
L
E
V
E
L
_
C
O
L
O
R
[
s
e
c
t
i
o
n
.
l
e
v
e
l
]
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
.
l
e
v
e
l
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
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
 
g
r
o
u
p
-
h
o
v
e
r
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
6
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
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
 
g
r
o
u
p
-
h
o
v
e
r
:
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
0
.
5
 
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
"
 
/
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
>


 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
e
c
t
i
o
n
.
i
d
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
 
1
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
5
 
+
 
i
d
x
 
*
 
0
.
0
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
 
s
e
t
S
h
o
w
G
a
t
e
(
t
r
u
e
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
g
r
o
u
p
 
w
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
 
g
a
p
-
4
 
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
 
p
x
-
5
 
p
y
-
4
 
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
 
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
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
2
5
 
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
 
t
e
x
t
-
l
e
f
t
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
n
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
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
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
.
i
d
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
g
r
o
u
p
 
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
4
 
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
 
p
x
-
5
 
p
y
-
4
 
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
2
5
 
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
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
n
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
/
d
i
v
>




 
 
 
 
 
 
<
L
o
g
i
n
G
a
t
e
 
o
p
e
n
=
{
s
h
o
w
G
a
t
e
}
 
o
n
C
l
o
s
e
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
h
o
w
G
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
}
 
/
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


