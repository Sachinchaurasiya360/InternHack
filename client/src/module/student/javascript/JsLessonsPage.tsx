
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
U
p
R
i
g
h
t
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
 
J
s
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
 
J
s
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
j
s
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
S
T
Y
L
E
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
g
r
e
e
n
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
g
r
e
e
n
-
4
0
0
 
b
o
r
d
e
r
-
g
r
e
e
n
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
g
r
e
e
n
-
9
0
0
/
6
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
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
6
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
e
d
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
r
e
d
-
4
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
e
d
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
r
e
d
-
9
0
0
/
6
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
 
M
e
t
a
C
h
i
p
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
"
,


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
.
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


 
 
c
l
a
s
s
N
a
m
e
?
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
 
b
o
r
d
e
r
 
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
l
a
s
s
N
a
m
e
 
|
|
 
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
s
p
a
n
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
 
R
i
n
g
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
,


 
 
c
o
m
p
l
e
t
e
,


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
;


 
 
c
o
m
p
l
e
t
e
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
4
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
 
5
6
 
5
6
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
2
8
"


 
 
 
 
 
 
 
 
 
 
c
y
=
"
2
8
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
1
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
s
t
o
n
e
-
8
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
2
8
"


 
 
 
 
 
 
 
 
 
 
c
y
=
"
2
8
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
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
9
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
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
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
 
J
s
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
 
J
s
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
r
e
l
a
t
i
v
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
 
p
b
-
1
2
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
 
J
a
v
a
S
c
r
i
p
t
 
-
 
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
 
J
a
v
a
S
c
r
i
p
t
 
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
 
c
l
o
s
u
r
e
s
,
 
a
s
y
n
c
/
a
w
a
i
t
,
 
p
r
o
t
o
t
y
p
e
s
,
 
D
O
M
 
m
a
n
i
p
u
l
a
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
 
j
a
v
a
s
c
r
i
p
t
,
 
j
a
v
a
s
c
r
i
p
t
 
t
u
t
o
r
i
a
l
,
 
j
a
v
a
s
c
r
i
p
t
 
l
e
s
s
o
n
s
,
 
c
l
o
s
u
r
e
s
,
 
a
s
y
n
c
 
a
w
a
i
t
,
 
D
O
M
 
m
a
n
i
p
u
l
a
t
i
o
n
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
j
a
v
a
s
c
r
i
p
t
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
 
J
a
v
a
S
c
r
i
p
t
 
-
 
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
 
J
a
v
a
S
c
r
i
p
t
 
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
 
c
l
o
s
u
r
e
s
,
 
a
s
y
n
c
/
a
w
a
i
t
,
 
p
r
o
t
o
t
y
p
e
s
,
 
D
O
M
 
m
a
n
i
p
u
l
a
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
j
a
v
a
s
c
r
i
p
t
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
J
a
v
a
S
c
r
i
p
t
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
j
a
v
a
s
c
r
i
p
t
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
 
J
a
v
a
S
c
r
i
p
t
 
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
 
J
a
v
a
S
c
r
i
p
t
 
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
 
J
a
v
a
S
c
r
i
p
t
 
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
 
v
a
r
i
a
b
l
e
s
,
 
f
u
n
c
t
i
o
n
s
,
 
D
O
M
 
m
a
n
i
p
u
l
a
t
i
o
n
,
 
a
s
y
n
c
/
a
w
a
i
t
,
 
E
S
6
+
 
f
e
a
t
u
r
e
s
,
 
a
n
d
 
r
e
a
l
-
w
o
r
l
d
 
p
r
o
j
e
c
t
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
I
s
 
J
a
v
a
S
c
r
i
p
t
 
h
a
r
d
 
t
o
 
l
e
a
r
n
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
W
i
t
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
d
 
l
e
a
r
n
i
n
g
 
l
i
k
e
 
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
'
s
 
J
a
v
a
S
c
r
i
p
t
 
t
r
a
c
k
,
 
b
e
g
i
n
n
e
r
s
 
c
a
n
 
g
e
t
 
s
t
a
r
t
e
d
 
q
u
i
c
k
l
y
 
a
n
d
 
b
u
i
l
d
 
r
e
a
l
 
p
r
o
j
e
c
t
s
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
 
o
p
a
c
i
t
y
-
[
0
.
0
4
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
5
]
 
z
-
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
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
2
5
)
 
1
p
x
,
 
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
 
1
p
x
)
"
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
S
i
z
e
:
 
"
1
2
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
}
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
6
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
3
 
s
m
:
p
x
-
0
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
1
0
 
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
 
p
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
K
i
c
k
e
r
>
l
e
a
r
n
 
/
 
j
a
v
a
s
c
r
i
p
t
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
m
t
-
4
 
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
5
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
e
a
r
n
 
J
S
{
"
 
"
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
r
e
l
a
t
i
v
e
 
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
d
e
e
p
l
y
.
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
X
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
 
s
c
a
l
e
X
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
7
,
 
d
e
l
a
y
:
 
0
.
4
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
m
t
-
3
 
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
a
x
-
w
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
l
o
s
u
r
e
s
,
 
a
s
y
n
c
/
a
w
a
i
t
,
 
p
r
o
t
o
t
y
p
e
s
,
 
t
h
e
 
e
v
e
n
t
 
l
o
o
p
,
 
a
n
d
 
e
v
e
r
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
v
i
e
w
 
f
a
v
o
u
r
i
t
e
,
 
w
a
l
k
e
d
 
f
r
o
m
 
f
i
r
s
t
 
p
r
i
n
c
i
p
l
e
s
 
t
o
 
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
x
-
4
 
g
a
p
-
y
-
2
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
s
s
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
l
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
l
-
2
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
 
O
v
e
r
a
l
l
 
p
r
o
g
r
e
s
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
 
p
x
-
5
 
p
y
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
 
m
b
-
2
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
v
e
r
a
l
l
 
p
r
o
g
r
e
s
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
w
-
f
u
l
l
 
h
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
s
m
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
7
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
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
 
m
b
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
2
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
u
l
e
s
 
/
 
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
d
i
v
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
m
t
-
2
 
t
e
x
t
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
e
s
s
o
n
 
t
r
a
c
k
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
 
h
i
d
d
e
n
 
s
m
:
b
l
o
c
k
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
 
g
r
i
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
 
m
d
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
4
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
j
a
v
a
s
c
r
i
p
t
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
 
c
a
r
d
C
l
a
s
s
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
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
-
4
 
s
m
:
p
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
 
h
-
f
u
l
l
 
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
;




 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
o
d
y
 
=
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
t
o
p
-
4
 
r
i
g
h
t
-
4
 
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
 
t
o
p
-
4
 
r
i
g
h
t
-
4
 
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
3
 
h
-
3
"
 
/
>
 
l
o
c
k
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
m
:
g
a
p
-
4
 
m
b
-
4
 
p
r
-
2
0
 
s
m
:
p
r
-
1
6
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
5
 
h
-
5
 
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
R
i
n
g
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
 
c
o
m
p
l
e
t
e
=
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
}
 
/
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
1
.
5
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
 
l
i
n
e
-
c
l
a
m
p
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
t
i
g
h
t
 
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
7
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
a
m
b
e
r
-
5
0
0
 
f
i
l
l
-
a
m
b
e
r
-
5
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
 
l
i
n
e
-
c
l
a
m
p
-
2
 
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
w
-
f
u
l
l
 
h
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
s
m
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
7
0
0
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
1
.
5
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
t
o
t
a
l
}
 
d
o
n
e
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
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
{
L
E
V
E
L
_
S
T
Y
L
E
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
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
M
e
t
a
C
h
i
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
6
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
-
3
"
 
/
>
 
i
n
t
e
r
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
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
a
u
t
o
 
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
 
p
t
-
3
 
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
w
h
i
t
e
/
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
 
"
s
i
g
n
 
i
n
 
t
o
 
u
n
l
o
c
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
r
e
v
i
e
w
 
s
e
c
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
o
p
e
n
 
l
e
s
s
o
n
s
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
A
r
r
o
w
U
p
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
y
-
0
.
5
 
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
{
`
$
{
c
a
r
d
C
l
a
s
s
}
 
w
-
f
u
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
 
o
p
a
c
i
t
y
-
8
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
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
o
d
y
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
{
c
a
r
d
C
l
a
s
s
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
o
d
y
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


