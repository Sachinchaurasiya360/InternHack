
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


 
 
C
o
d
e
B
l
o
c
k
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
s
t
r
i
n
g
s
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
 
 
C
e
l
l
S
t
a
t
e
 
+
 
l
o
c
a
l
 
M
e
m
o
r
y
C
e
l
l
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


 
 
|
 
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
s
w
a
p
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
m
a
t
c
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
w
i
n
d
o
w
"


 
 
|
 
"
m
i
d
"
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
_
C
O
L
O
R
S
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
 
{
 
b
g
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
;
 
t
e
x
t
:
 
s
t
r
i
n
g
 
}
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
 
{
 
b
g
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
 
 
 
 
 
b
o
r
d
e
r
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
,
 
 
 
t
e
x
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
 
}
,


 
 
a
c
t
i
v
e
:
 
 
 
{
 
b
g
:
 
"
#
d
b
e
a
f
e
"
,
 
 
 
 
b
o
r
d
e
r
:
 
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
 
 
 
 
 
 
t
e
x
t
:
 
"
#
1
e
3
a
8
a
"
 
}
,


 
 
c
o
m
p
a
r
e
:
 
 
{
 
b
g
:
 
"
#
f
e
f
9
c
3
"
,
 
 
 
 
b
o
r
d
e
r
:
 
"
#
e
a
b
3
0
8
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
7
1
3
f
1
2
"
 
}
,


 
 
s
w
a
p
:
 
 
 
 
 
{
 
b
g
:
 
"
#
f
c
e
7
f
3
"
,
 
 
 
 
b
o
r
d
e
r
:
 
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
 
 
 
 
 
 
t
e
x
t
:
 
"
#
8
3
1
8
4
3
"
 
}
,


 
 
d
o
n
e
:
 
 
 
 
 
{
 
b
g
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
 
 
 
 
b
o
r
d
e
r
:
 
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
 
 
 
 
 
 
t
e
x
t
:
 
"
#
0
6
4
e
3
b
"
 
}
,


 
 
v
i
s
i
t
e
d
:
 
 
{
 
b
g
:
 
"
#
f
1
f
5
f
9
"
,
 
 
 
 
b
o
r
d
e
r
:
 
"
#
9
4
a
3
b
8
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
4
7
5
5
6
9
"
 
}
,


 
 
m
a
t
c
h
:
 
 
 
 
{
 
b
g
:
 
"
#
d
c
f
c
e
7
"
,
 
 
 
 
b
o
r
d
e
r
:
 
"
#
2
2
c
5
5
e
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
1
4
5
3
2
d
"
 
}
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
 
{
 
b
g
:
 
"
#
f
e
e
2
e
2
"
,
 
 
 
 
b
o
r
d
e
r
:
 
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
 
 
 
 
 
 
t
e
x
t
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
 
}
,


 
 
w
i
n
d
o
w
:
 
 
 
{
 
b
g
:
 
"
#
e
d
e
9
f
e
"
,
 
 
 
 
b
o
r
d
e
r
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
 
 
 
 
 
 
t
e
x
t
:
 
"
#
3
b
0
7
6
4
"
 
}
,


 
 
m
i
d
:
 
 
 
 
 
 
{
 
b
g
:
 
"
#
f
f
e
d
d
5
"
,
 
 
 
 
b
o
r
d
e
r
:
 
"
#
f
9
7
3
1
6
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
7
c
2
d
1
2
"
 
}
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
m
o
r
y
C
e
l
l
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
c
e
l
l
W
i
d
t
h
 
=
 
4
2
,


}
:
 
{


 
 
v
a
l
u
e
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


 
 
s
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
r
s
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
 
n
u
m
b
e
r
>
;


 
 
c
e
l
l
W
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


}
)
 
{


 
 
c
o
n
s
t
 
p
t
M
a
p
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
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
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
o
i
n
t
e
r
s
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
[
k
,
 
v
]
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
M
a
p
[
v
]
)
 
p
t
M
a
p
[
v
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
M
a
p
[
v
]
.
p
u
s
h
(
k
)
;


 
 
 
 
}
)
;


 
 
}




 
 
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
 
w
-
f
u
l
l
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
1
"
>


 
 
 
 
 
 
 
 
{
/
*
 
p
o
i
n
t
e
r
 
l
a
b
e
l
s
 
a
b
o
v
e
 
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
 
g
a
p
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
_
,
 
i
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
"
 
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
 
c
e
l
l
W
i
d
t
h
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
M
a
p
[
i
]
 
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
p
t
M
a
p
[
i
]
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
3
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
/
*
 
c
e
l
l
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
 
g
a
p
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
v
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
 
s
t
a
t
e
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
 
=
 
s
t
a
t
e
s
?
.
[
i
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
 
c
o
l
o
r
s
 
=
 
C
E
L
L
_
C
O
L
O
R
S
[
s
t
a
t
e
]
 
?
?
 
C
E
L
L
_
C
O
L
O
R
S
.
d
e
f
a
u
l
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
o
u
n
d
e
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
2
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
c
e
l
l
W
i
d
t
h
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
c
e
l
l
W
i
d
t
h
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
 
c
o
l
o
r
s
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
s
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
c
o
l
o
r
s
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
d
i
v
>


 
 
 
 
 
 
 
 
{
/
*
 
i
n
d
e
x
 
r
o
w
 
b
e
l
o
w
 
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
 
g
a
p
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
_
,
 
i
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
 
c
e
l
l
W
i
d
t
h
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
i
}
]


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
v
a
l
u
e
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


 
 
s
t
a
t
e
s
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
;


 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
?
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


 
 
p
a
t
t
e
r
n
S
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
a
t
t
e
r
n
O
f
f
s
e
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
 
 
R
e
v
e
r
s
e
 
(
t
w
o
-
p
o
i
n
t
e
r
 
s
w
a
p
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
P
S
E
U
D
O
_
R
E
V
E
R
S
E
 
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
 
r
e
v
e
r
s
e
(
s
)
:
"
,


 
 
"
 
 
i
 
←
 
0
,
 
j
 
←
 
n
 
-
 
1
"
,


 
 
"
 
 
w
h
i
l
e
 
i
 
<
 
j
:
"
,


 
 
"
 
 
 
 
s
w
a
p
 
s
[
i
]
 
a
n
d
 
s
[
j
]
"
,


 
 
"
 
 
 
 
i
 
←
 
i
 
+
 
1
,
 
j
 
←
 
j
 
-
 
1
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
 
b
u
i
l
d
R
e
v
e
r
s
e
(
t
e
x
t
:
 
s
t
r
i
n
g
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


 
 
c
o
n
s
t
 
f
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
 
a
 
=
 
t
e
x
t
.
s
p
l
i
t
(
"
"
)
;


 
 
c
o
n
s
t
 
n
 
=
 
a
.
l
e
n
g
t
h
;


 
 
f
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
v
e
r
s
e
 
t
h
e
 
s
t
r
i
n
g
 
"
$
{
t
e
x
t
}
"
 
i
n
 
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
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
,


 
 
}
)
;


 
 
l
e
t
 
i
 
=
 
0
,
 
j
 
=
 
n
 
-
 
1
;


 
 
f
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
 
i
,
 
j
 
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
P
l
a
c
e
 
t
w
o
 
p
o
i
n
t
e
r
s
 
a
t
 
t
h
e
 
e
n
d
s
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
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
i
 
<
 
j
)
 
{


 
 
 
 
f
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
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
j
 
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
d
i
t
i
o
n
 
i
 
<
 
j
 
h
o
l
d
s
 
(
$
{
i
}
 
<
 
$
{
j
}
)
;
 
s
w
a
p
 
t
h
e
 
e
n
d
s
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
|
|
 
k
 
=
=
=
 
j
 
?
 
"
c
o
m
p
a
r
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
}
,


 
 
 
 
}
)
;


 
 
 
 
[
a
[
i
]
,
 
a
[
j
]
]
 
=
 
[
a
[
j
]
,
 
a
[
i
]
]
;


 
 
 
 
f
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
 
i
,
 
j
 
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
w
a
p
p
e
d
.
 
T
h
e
 
s
t
r
i
n
g
 
i
s
 
n
o
w
 
"
$
{
a
.
j
o
i
n
(
"
"
)
}
"
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
|
|
 
k
 
=
=
=
 
j
 
?
 
"
s
w
a
p
"
 
:
 
k
 
<
 
i
 
|
|
 
k
 
>
 
j
 
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
+
+
;
 
j
-
-
;


 
 
 
 
f
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
 
i
,
 
j
 
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
M
o
v
e
 
t
h
e
 
p
o
i
n
t
e
r
s
 
i
n
w
a
r
d
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
<
 
i
 
|
|
 
k
 
>
 
j
 
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
}
,


 
 
 
 
}
)
;


 
 
}


 
 
f
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
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
j
 
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
P
o
i
n
t
e
r
s
 
m
e
t
.
 
R
e
v
e
r
s
a
l
 
c
o
m
p
l
e
t
e
:
 
"
$
{
a
.
j
o
i
n
(
"
"
)
}
"
.
 
O
(
n
)
 
t
i
m
e
,
 
O
(
1
)
 
e
x
t
r
a
 
s
p
a
c
e
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
d
o
n
e
"
)
,
 
p
o
i
n
t
e
r
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
 
 
P
a
l
i
n
d
r
o
m
e
 
c
h
e
c
k
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
P
S
E
U
D
O
_
P
A
L
I
 
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
s
P
a
l
i
n
d
r
o
m
e
(
s
)
:
"
,


 
 
"
 
 
i
 
←
 
0
,
 
j
 
←
 
n
 
-
 
1
"
,


 
 
"
 
 
w
h
i
l
e
 
i
 
<
 
j
:
"
,


 
 
"
 
 
 
 
i
f
 
s
[
i
]
 
!
=
 
s
[
j
]
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
 
←
 
i
 
+
 
1
,
 
j
 
←
 
j
 
-
 
1
"
,


 
 
"
 
 
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
P
a
l
i
n
d
r
o
m
e
(
t
e
x
t
:
 
s
t
r
i
n
g
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


 
 
c
o
n
s
t
 
f
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
 
a
 
=
 
t
e
x
t
.
s
p
l
i
t
(
"
"
)
;


 
 
c
o
n
s
t
 
n
 
=
 
a
.
l
e
n
g
t
h
;


 
 
f
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
h
e
c
k
 
w
h
e
t
h
e
r
 
"
$
{
t
e
x
t
}
"
 
i
s
 
a
 
p
a
l
i
n
d
r
o
m
e
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
,


 
 
}
)
;


 
 
l
e
t
 
i
 
=
 
0
,
 
j
 
=
 
n
 
-
 
1
;


 
 
f
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
 
i
,
 
j
 
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
P
o
i
n
t
e
r
s
 
a
t
 
t
h
e
 
e
n
d
s
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
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
i
 
<
 
j
)
 
{


 
 
 
 
f
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
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
j
 
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
i
 
<
 
j
,
 
c
o
n
t
i
n
u
e
 
i
n
s
p
e
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
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
|
|
 
k
 
=
=
=
 
j
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
k
 
<
 
i
 
|
|
 
k
 
>
 
j
 
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
}
,


 
 
 
 
}
)
;


 
 
 
 
f
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
 
i
,
 
j
 
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
m
p
a
r
e
 
s
[
$
{
i
}
]
 
(
'
$
{
a
[
i
]
}
'
)
 
w
i
t
h
 
s
[
$
{
j
}
]
 
(
'
$
{
a
[
j
]
}
'
)
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
|
|
 
k
 
=
=
=
 
j
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
k
 
<
 
i
 
|
|
 
k
 
>
 
j
 
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
a
[
i
]
 
!
=
=
 
a
[
j
]
)
 
{


 
 
 
 
 
 
f
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
 
i
,
 
j
,
 
r
e
s
u
l
t
:
 
"
f
a
l
s
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
M
i
s
m
a
t
c
h
!
 
N
o
t
 
a
 
p
a
l
i
n
d
r
o
m
e
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
|
|
 
k
 
=
=
=
 
j
 
?
 
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
 
:
 
k
 
<
 
i
 
|
|
 
k
 
>
 
j
 
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
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
;


 
 
 
 
}


 
 
 
 
f
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
 
i
,
 
j
 
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
M
a
t
c
h
.
 
M
o
v
e
 
t
h
e
 
p
o
i
n
t
e
r
s
 
i
n
w
a
r
d
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
|
|
 
k
 
=
=
=
 
j
 
?
 
"
m
a
t
c
h
"
 
:
 
k
 
<
 
i
 
|
|
 
k
 
>
 
j
 
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
+
+
;
 
j
-
-
;


 
 
}


 
 
f
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
 
i
,
 
j
,
 
r
e
s
u
l
t
:
 
"
t
r
u
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
A
l
l
 
p
a
i
r
s
 
m
a
t
c
h
e
d
.
 
"
$
{
t
e
x
t
}
"
 
i
s
 
a
 
p
a
l
i
n
d
r
o
m
e
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
m
a
t
c
h
"
)
,
 
p
o
i
n
t
e
r
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
r
u
t
e
-
f
o
r
c
e
 
s
u
b
s
t
r
i
n
g
 
s
e
a
r
c
h
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
P
S
E
U
D
O
_
B
R
U
T
E
 
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
t
e
x
t
,
 
p
a
t
)
:
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
0
.
.
n
-
m
:
"
,


 
 
"
 
 
 
 
j
 
←
 
0
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
j
 
<
 
m
 
a
n
d
 
t
e
x
t
[
i
+
j
]
 
=
=
 
p
a
t
[
j
]
:
"
,


 
 
"
 
 
 
 
 
 
j
 
←
 
j
 
+
 
1
"
,


 
 
"
 
 
 
 
i
f
 
j
 
=
=
 
m
:
 
r
e
t
u
r
n
 
i
"
,


 
 
"
 
 
r
e
t
u
r
n
 
-
1
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
 
b
u
i
l
d
B
r
u
t
e
(
t
e
x
t
:
 
s
t
r
i
n
g
,
 
p
a
t
:
 
s
t
r
i
n
g
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


 
 
c
o
n
s
t
 
f
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
 
n
 
=
 
t
e
x
t
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
 
m
 
=
 
p
a
t
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
a
 
=
 
t
e
x
t
.
s
p
l
i
t
(
"
"
)
;


 
 
i
f
 
(
m
 
=
=
=
 
0
 
|
|
 
m
 
>
 
n
)
 
{


 
 
 
 
f
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
 
m
 
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
P
a
t
t
e
r
n
 
i
s
 
e
m
p
t
y
 
o
r
 
l
o
n
g
e
r
 
t
h
a
n
 
t
e
x
t
.
`
,
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
 
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
;


 
 
}


 
 
f
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
 
m
 
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
l
i
d
e
 
t
h
e
 
p
a
t
t
e
r
n
 
a
c
r
o
s
s
 
t
h
e
 
t
e
x
t
;
 
c
o
m
p
a
r
e
 
c
h
a
r
a
c
t
e
r
 
b
y
 
c
h
a
r
a
c
t
e
r
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
,


 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
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
d
e
f
a
u
l
t
"
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
0
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
=
 
n
 
-
 
m
;
 
i
+
+
)
 
{


 
 
 
 
f
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
 
i
 
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
y
 
a
l
i
g
n
i
n
g
 
t
h
e
 
p
a
t
t
e
r
n
 
a
t
 
p
o
s
i
t
i
o
n
 
$
{
i
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
>
=
 
i
 
&
&
 
k
 
<
 
i
 
+
 
m
 
?
 
"
w
i
n
d
o
w
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
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
d
e
f
a
u
l
t
"
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
i
,


 
 
 
 
}
)
;


 
 
 
 
l
e
t
 
j
 
=
 
0
;


 
 
 
 
f
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
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
j
 
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
s
e
t
 
i
n
n
e
r
 
c
u
r
s
o
r
 
j
 
t
o
 
0
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
>
=
 
i
 
&
&
 
k
 
<
 
i
 
+
 
m
 
?
 
"
w
i
n
d
o
w
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
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
d
e
f
a
u
l
t
"
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
i
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
j
 
<
 
m
)
 
{


 
 
 
 
 
 
f
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
 
i
,
 
j
 
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
m
p
a
r
e
 
t
e
x
t
[
$
{
i
 
+
 
j
}
]
 
(
'
$
{
t
a
[
i
 
+
 
j
]
}
'
)
 
w
i
t
h
 
p
a
t
[
$
{
j
}
]
 
(
'
$
{
p
a
t
[
j
]
}
'
)
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
+
 
j
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
k
 
>
=
 
i
 
&
&
 
k
 
<
 
i
 
+
 
m
 
?
 
"
w
i
n
d
o
w
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
"
i
+
j
"
:
 
i
 
+
 
j
 
}
,


 
 
 
 
 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
j
 
?
 
"
c
o
m
p
a
r
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
)
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
i
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
i
f
 
(
t
a
[
i
 
+
 
j
]
 
!
=
=
 
p
a
t
[
j
]
)
 
{


 
 
 
 
 
 
 
 
f
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
 
i
,
 
j
 
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
M
i
s
m
a
t
c
h
.
 
S
h
i
f
t
 
t
h
e
 
p
a
t
t
e
r
n
 
o
n
e
 
s
t
e
p
 
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
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
+
 
j
 
?
 
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
 
:
 
k
 
>
=
 
i
 
&
&
 
k
 
<
 
i
 
+
 
m
 
?
 
"
w
i
n
d
o
w
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
"
i
+
j
"
:
 
i
 
+
 
j
 
}
,


 
 
 
 
 
 
 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
j
 
?
 
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
)
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
i
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
}


 
 
 
 
 
 
f
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
 
i
,
 
j
 
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
M
a
t
c
h
.
 
A
d
v
a
n
c
e
 
j
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
+
 
j
 
?
 
"
m
a
t
c
h
"
 
:
 
k
 
>
=
 
i
 
&
&
 
k
 
<
 
i
 
+
 
m
 
?
 
"
w
i
n
d
o
w
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
"
i
+
j
"
:
 
i
 
+
 
j
 
}
,


 
 
 
 
 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
<
=
 
j
 
?
 
"
m
a
t
c
h
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
)
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
i
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
j
+
+
;


 
 
 
 
}


 
 
 
 
i
f
 
(
j
 
=
=
=
 
m
)
 
{


 
 
 
 
 
 
f
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
 
i
,
 
f
o
u
n
d
:
 
i
 
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
u
l
l
 
m
a
t
c
h
 
a
t
 
i
n
d
e
x
 
$
{
i
}
!
 
R
e
t
u
r
n
 
$
{
i
}
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
>
=
 
i
 
&
&
 
k
 
<
 
i
 
+
 
m
 
?
 
"
m
a
t
c
h
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
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
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
m
a
t
c
h
"
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
i
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
;


 
 
 
 
}


 
 
}


 
 
f
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
 
6
,
 
v
a
r
s
:
 
{
 
f
o
u
n
d
:
 
-
1
 
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
P
a
t
t
e
r
n
 
n
o
t
 
f
o
u
n
d
.
 
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
 
i
s
 
O
(
n
 
·
 
m
)
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
t
a
,
 
s
t
a
t
e
s
:
 
t
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
,


 
 
 
 
p
a
t
t
e
r
n
V
a
l
u
e
s
:
 
p
a
t
.
s
p
l
i
t
(
"
"
)
,
 
p
a
t
t
e
r
n
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
.
s
p
l
i
t
(
"
"
)
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
d
e
f
a
u
l
t
"
)
,
 
p
a
t
t
e
r
n
O
f
f
s
e
t
:
 
0
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
 
O
p
 
=
 
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
p
a
l
i
n
d
r
o
m
e
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
o
p
,
 
s
e
t
O
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
<
O
p
>
(
"
r
e
v
e
r
s
e
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
e
x
t
,
 
s
e
t
T
e
x
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
r
a
c
e
c
a
r
"
)
;


 
 
c
o
n
s
t
 
[
p
a
t
,
 
s
e
t
P
a
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
a
c
e
"
)
;




 
 
c
o
n
s
t
 
{
 
p
s
e
u
d
o
,
 
f
r
a
m
e
s
 
}
 
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
o
p
 
=
=
=
 
"
r
e
v
e
r
s
e
"
)
 
r
e
t
u
r
n
 
{
 
p
s
e
u
d
o
:
 
P
S
E
U
D
O
_
R
E
V
E
R
S
E
,
 
f
r
a
m
e
s
:
 
b
u
i
l
d
R
e
v
e
r
s
e
(
t
e
x
t
)
 
}
;


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
p
a
l
i
n
d
r
o
m
e
"
)
 
r
e
t
u
r
n
 
{
 
p
s
e
u
d
o
:
 
P
S
E
U
D
O
_
P
A
L
I
,
 
f
r
a
m
e
s
:
 
b
u
i
l
d
P
a
l
i
n
d
r
o
m
e
(
t
e
x
t
)
 
}
;


 
 
 
 
r
e
t
u
r
n
 
{
 
p
s
e
u
d
o
:
 
P
S
E
U
D
O
_
B
R
U
T
E
,
 
f
r
a
m
e
s
:
 
b
u
i
l
d
B
r
u
t
e
(
t
e
x
t
,
 
p
a
t
)
 
}
;


 
 
}
,
 
[
o
p
,
 
t
e
x
t
,
 
p
a
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
 
o
p
L
a
b
e
l
s
:
 
R
e
c
o
r
d
<
O
p
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


 
 
 
 
r
e
v
e
r
s
e
:
 
"
R
e
v
e
r
s
e
,
 
t
w
o
 
p
o
i
n
t
e
r
 
s
w
a
p
"
,


 
 
 
 
p
a
l
i
n
d
r
o
m
e
:
 
"
P
a
l
i
n
d
r
o
m
e
,
 
c
o
n
v
e
r
g
i
n
g
 
p
o
i
n
t
e
r
s
"
,


 
 
 
 
s
e
a
r
c
h
:
 
"
B
r
u
t
e
 
f
o
r
c
e
 
s
u
b
s
t
r
i
n
g
,
 
O
(
n
 
·
 
m
)
"
,


 
 
}
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
_
W
 
=
 
4
2
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
{
o
p
L
a
b
e
l
s
[
o
p
]
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
T
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
t
e
x
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
 
r
a
c
e
c
a
r
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
P
a
l
i
n
d
r
o
m
e
"
,
 
v
a
l
u
e
:
 
"
r
a
c
e
c
a
r
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
N
o
r
m
a
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
a
b
r
a
c
a
d
a
b
r
a
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
E
v
e
n
"
,
 
v
a
l
u
e
:
 
"
a
b
b
a
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
i
n
g
l
e
"
,
 
v
a
l
u
e
:
 
"
x
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
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
v
.
l
e
n
g
t
h
 
>
 
0
)
 
s
e
t
T
e
x
t
(
v
.
s
l
i
c
e
(
0
,
 
2
4
)
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
a
l
p
h
a
 
=
 
"
a
b
c
d
e
f
g
h
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
5
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
6
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
 
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
 
a
l
p
h
a
[
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
a
l
p
h
a
.
l
e
n
g
t
h
)
]
)
.
j
o
i
n
(
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
T
e
x
t
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
o
p
 
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
P
a
t
t
e
r
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
a
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
 
a
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
a
c
e
"
,
 
v
a
l
u
e
:
 
"
a
c
e
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
a
b
"
,
 
v
a
l
u
e
:
 
"
a
b
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
x
y
z
"
,
 
v
a
l
u
e
:
 
"
x
y
z
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
v
.
l
e
n
g
t
h
 
>
 
0
)
 
s
e
t
P
a
t
(
v
.
s
l
i
c
e
(
0
,
 
8
)
)
;
 
}
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
o
p
e
r
a
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
o
p
L
a
b
e
l
s
)
 
a
s
 
O
p
[
]
)
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
i
d
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
O
p
(
i
d
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
o
p
 
=
=
=
 
i
d
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
"
>
{
o
p
L
a
b
e
l
s
[
i
d
]
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
d
i
v
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
i
"
,
 
"
j
"
,
 
"
f
o
u
n
d
"
,
 
"
r
e
s
u
l
t
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
"
>


 
 
 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
v
a
l
u
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
v
a
l
u
e
s
 
?
?
 
[
]
}


 
 
 
 
 
 
 
 
 
 
s
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
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
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
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
C
E
L
L
_
W
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
p
a
t
t
e
r
n
V
a
l
u
e
s
 
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
r
g
i
n
L
e
f
t
:
 
(
f
r
a
m
e
.
p
a
t
t
e
r
n
O
f
f
s
e
t
 
?
?
 
0
)
 
*
 
(
C
E
L
L
_
W
 
+
 
2
)
 
}
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
t
t
e
r
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
p
a
t
t
e
r
n
V
a
l
u
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
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
.
p
a
t
t
e
r
n
S
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
C
E
L
L
_
W
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
w
-
f
u
l
l
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
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
R
e
v
e
r
s
e
"
,
 
b
:
 
"
S
w
a
p
 
e
n
d
s
,
 
m
o
v
e
 
i
n
w
a
r
d
.
 
O
(
n
)
 
t
i
m
e
,
 
O
(
1
)
 
s
p
a
c
e
 
w
i
t
h
 
t
w
o
 
p
o
i
n
t
e
r
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
P
a
l
i
n
d
r
o
m
e
"
,
 
b
:
 
"
C
o
m
p
a
r
e
 
e
n
d
s
;
 
a
n
y
 
m
i
s
m
a
t
c
h
 
i
s
 
a
 
d
e
f
i
n
i
t
i
v
e
 
n
o
.
 
S
h
o
r
t
-
c
i
r
c
u
i
t
s
 
o
n
 
f
i
r
s
t
 
m
i
s
m
a
t
c
h
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
S
u
b
s
t
r
i
n
g
 
s
e
a
r
c
h
"
,
 
b
:
 
"
S
l
i
d
e
 
a
 
w
i
n
d
o
w
 
o
f
 
s
i
z
e
 
m
;
 
c
o
m
p
a
r
e
 
c
h
a
r
a
c
t
e
r
 
b
y
 
c
h
a
r
a
c
t
e
r
.
 
B
r
u
t
e
 
f
o
r
c
e
 
i
s
 
O
(
n
 
·
 
m
)
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
A
n
a
g
r
a
m
 
/
 
f
r
e
q
u
e
n
c
y
"
,
 
b
:
 
"
C
o
u
n
t
 
e
a
c
h
 
c
h
a
r
a
c
t
e
r
 
i
n
t
o
 
a
 
2
6
-
s
i
z
e
d
 
a
r
r
a
y
;
 
c
o
m
p
a
r
e
 
c
o
u
n
t
s
.
 
O
(
n
)
 
t
i
m
e
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
s
t
r
i
n
g
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
A
r
r
a
y
s
 
o
f
 
c
h
a
r
a
c
t
e
r
s
,
 
w
i
t
h
 
o
n
e
 
i
m
m
u
t
a
b
i
l
i
t
y
 
t
w
i
s
t
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


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
a
l
g
o
r
i
t
h
m
 
y
o
u
 
l
e
a
r
n
e
d
 
f
o
r
 
a
r
r
a
y
s
 
w
o
r
k
s
 
o
n
 
s
t
r
i
n
g
s
:
 
i
n
d
e
x
i
n
g
,
 
s
c
a
n
n
i
n
g
,
 
t
w
o
-
p
o
i
n
t
e
r


 
 
 
 
 
 
 
 
 
 
s
w
e
e
p
s
.
 
T
h
e
 
t
w
i
s
t
 
i
s
 
t
h
a
t
 
s
t
r
i
n
g
s
 
a
r
e
 
o
f
t
e
n
 
<
e
m
>
i
m
m
u
t
a
b
l
e
<
/
e
m
>
 
i
n
 
h
i
g
h
-
l
e
v
e
l
 
l
a
n
g
u
a
g
e
s


 
 
 
 
 
 
 
 
 
 
(
J
a
v
a
,
 
P
y
t
h
o
n
,
 
J
S
)
,
 
s
o
 
e
v
e
n
 
a
 
o
n
e
-
c
h
a
r
a
c
t
e
r
 
c
h
a
n
g
e
 
c
o
s
t
s
 
O
(
n
)
 
t
o
 
b
u
i
l
d
 
a
 
n
e
w
 
s
t
r
i
n
g
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
c
a
r
d
s
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
c
.
t
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
c
.
b
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
B
r
u
t
e
-
f
o
r
c
e
 
s
u
b
s
t
r
i
n
g
 
m
a
t
c
h
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
C
o
d
e
B
l
o
c
k
>
{
`
f
o
r
 
i
 
i
n
 
0
.
.
n
 
-
 
m
:


 
 
j
 
←
 
0


 
 
w
h
i
l
e
 
j
 
<
 
m
 
a
n
d
 
t
e
x
t
[
i
 
+
 
j
]
 
=
=
 
p
a
t
[
j
]
:


 
 
 
 
j
 
←
 
j
 
+
 
1


 
 
i
f
 
j
 
=
=
 
m
:
 
r
e
t
u
r
n
 
i
 
 
 
#
 
m
a
t
c
h
 
f
o
u
n
d


r
e
t
u
r
n
 
-
1
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
 
n
o
t
 
f
o
u
n
d
`
}
<
/
C
o
d
e
B
l
o
c
k
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
H
o
w
 
m
a
n
y
 
s
w
a
p
 
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
 
d
o
e
s
 
r
e
v
e
r
s
e
(
'
a
b
c
d
e
f
'
)
 
p
e
r
f
o
r
m
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
2
"
,
 
"
3
"
,
 
"
5
"
,
 
"
6
"
]
,
 
a
n
s
:
 
1
,
 
e
x
p
:
 
"
n
 
=
 
6
,
 
s
o
 
⌊
n
/
2
⌋
 
=
 
3
 
s
w
a
p
s
 
(
p
a
i
r
s
 
a
-
f
,
 
b
-
e
,
 
c
-
d
)
.
"
 
}
,


 
 
 
 
{
 
q
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
s
e
 
i
s
 
N
O
T
 
a
 
p
a
l
i
n
d
r
o
m
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
r
a
c
e
c
a
r
"
,
 
"
a
b
b
a
"
,
 
"
a
b
c
b
a
"
,
 
"
a
b
c
d
a
"
]
,
 
a
n
s
:
 
3
,
 
e
x
p
:
 
"
'
a
b
c
d
a
'
 
r
e
v
e
r
s
e
d
 
i
s
 
'
a
d
c
b
a
'
,
 
d
i
f
f
e
r
e
n
t
.
"
 
}
,


 
 
 
 
{
 
q
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
 
o
f
 
b
r
u
t
e
-
f
o
r
c
e
 
s
e
a
r
c
h
 
f
o
r
 
p
a
t
 
'
a
a
b
'
 
i
n
 
'
a
a
a
a
a
b
'
 
(
n
=
6
,
 
m
=
3
)
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
3
"
,
 
"
6
"
,
 
"
1
2
"
,
 
"
1
8
"
]
,
 
a
n
s
:
 
2
,
 
e
x
p
:
 
"
E
a
c
h
 
o
f
 
t
h
e
 
4
 
a
l
i
g
n
m
e
n
t
s
 
m
a
y
 
c
o
m
p
a
r
e
 
u
p
 
t
o
 
m
=
3
 
c
h
a
r
s
,
 
s
o
 
u
p
 
t
o
 
1
2
 
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
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
h
i
c
h
 
a
p
p
r
o
a
c
h
 
i
s
 
O
(
n
)
 
s
p
a
c
e
 
b
e
c
a
u
s
e
 
s
t
r
i
n
g
s
 
a
r
e
 
i
m
m
u
t
a
b
l
e
 
i
n
 
P
y
t
h
o
n
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
I
n
-
p
l
a
c
e
 
r
e
v
e
r
s
e
 
w
i
t
h
 
t
w
o
 
p
o
i
n
t
e
r
s
"
,
 
"
B
u
i
l
d
i
n
g
 
a
 
r
e
v
e
r
s
e
d
 
c
o
p
y
 
v
i
a
 
c
o
n
c
a
t
e
n
a
t
i
o
n
"
,
 
"
C
h
e
c
k
i
n
g
 
p
a
l
i
n
d
r
o
m
e
 
w
i
t
h
 
t
w
o
 
p
o
i
n
t
e
r
s
"
,
 
"
I
n
d
e
x
i
n
g
 
s
[
i
]
"
]
,
 
a
n
s
:
 
1
,
 
e
x
p
:
 
"
C
r
e
a
t
i
n
g
 
a
 
n
e
w
 
s
t
r
i
n
g
 
c
o
s
t
s
 
O
(
n
)
 
m
e
m
o
r
y
;
 
i
n
-
p
l
a
c
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
s
 
o
v
e
r
 
i
m
m
u
t
a
b
l
e
 
s
t
r
i
n
g
s
 
c
o
p
y
 
t
h
e
 
w
h
o
l
e
 
t
h
i
n
g
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
 
[
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
d
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
 
s
e
l
 
=
 
p
i
c
k
e
d
[
i
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
"
>
#
{
i
 
+
 
1
}
.
<
/
s
t
r
o
n
g
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
o
p
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
o
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
 
c
o
r
r
e
c
t
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
p
.
a
n
s
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
r
o
n
g
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
s
e
l
 
&
&
 
i
d
x
 
!
=
=
 
p
.
a
n
s
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
i
d
x
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
p
i
c
k
e
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
i
c
k
e
d
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
{
`
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
5
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
w
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
5
0
0
 
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
s
t
o
n
e
-
3
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
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
{
p
.
e
x
p
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
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
W
h
y
 
b
r
u
t
e
 
f
o
r
c
e
 
i
s
 
O
(
n
 
·
 
m
)
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
r
e
 
a
r
e
 
u
p
 
t
o
 
(
n
 
−
 
m
 
+
 
1
)
 
a
l
i
g
n
m
e
n
t
s
 
o
f
 
t
h
e
 
p
a
t
t
e
r
n
,
 
a
n
d
 
e
a
c
h
 
a
l
i
g
n
m
e
n
t
 
m
a
y
 
n
e
e
d
 
u
p
 
t
o


 
 
 
 
 
 
 
 
 
 
m
 
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
.
 
I
n
 
t
h
e
 
w
o
r
s
t
 
c
a
s
e
 
(
e
.
g
.
 
t
e
x
t
 
=
 
"
a
a
a
a
…
a
b
"
,
 
p
a
t
t
e
r
n
 
=
 
"
a
a
b
"
)
,
 
w
e
 
r
e
-
s
c
a
n


 
 
 
 
 
 
 
 
 
 
a
l
m
o
s
t
 
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
 
a
t
 
e
v
e
r
y
 
s
h
i
f
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
B
e
t
t
e
r
 
a
l
g
o
r
i
t
h
m
s
 
e
x
i
s
t
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


 
 
 
 
 
 
 
 
 
 
K
M
P
,
 
Z
-
a
l
g
o
r
i
t
h
m
,
 
a
n
d
 
R
a
b
i
n
-
K
a
r
p
 
a
l
l
 
r
u
n
 
i
n
 
O
(
n
 
+
 
m
)
 
t
i
m
e
 
b
y
 
a
v
o
i
d
i
n
g
 
r
e
d
u
n
d
a
n
t


 
 
 
 
 
 
 
 
 
 
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
 
a
f
t
e
r
 
a
 
m
i
s
m
a
t
c
h
.
 
Y
o
u
 
w
i
l
l
 
m
e
e
t
 
K
M
P
 
i
n
 
L
e
v
e
l
 
7
,
 
b
r
u
t
e
 
f
o
r
c
e
 
i
s
 
t
h
e
 
b
a
s
e
l
i
n
e


 
 
 
 
 
 
 
 
 
 
y
o
u
 
i
m
p
r
o
v
e
 
o
n
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
m
m
u
t
a
b
l
e
-
s
t
r
i
n
g
 
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
 
P
y
t
h
o
n
/
J
a
v
a
,
 
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
s
 
=
 
s
 
+
 
c
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
 
i
n
s
i
d
e
 
a
 
l
o
o
p
 
i
s
 
O
(
n
²
)
,
 
e
a
c
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
 
c
o
p
i
e
s
 
t
h
e
 
w
h
o
l
e
 
s
t
r
i
n
g
.
 
A
l
w
a
y
s
 
u
s
e
 
a
 
l
i
s
t
/
S
t
r
i
n
g
B
u
i
l
d
e
r
 
a
n
d
 
j
o
i
n
 
a
t
 
t
h
e
 
e
n
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
1
_
S
t
r
i
n
g
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
I
n
-
p
l
a
c
e
 
r
e
v
e
r
s
e
 
w
i
t
h
 
t
w
o
 
p
o
i
n
t
e
r
s
 
h
a
s
 
w
h
a
t
 
t
i
m
e
 
a
n
d
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
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
O
(
n
)
,
 
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
)
,
 
O
(
1
)
"
,
 
"
O
(
n
²
)
,
 
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
,
 
O
(
1
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
W
e
 
t
o
u
c
h
 
e
a
c
h
 
c
h
a
r
a
c
t
e
r
 
o
n
c
e
 
a
n
d
 
n
e
e
d
 
o
n
l
y
 
t
h
e
 
t
w
o
 
p
o
i
n
t
e
r
s
,
 
O
(
n
)
 
t
i
m
e
,
 
O
(
1
)
 
s
p
a
c
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
T
h
e
 
t
w
o
-
p
o
i
n
t
e
r
 
p
a
l
i
n
d
r
o
m
e
 
c
h
e
c
k
 
h
a
l
t
s
 
e
a
r
l
y
 
w
h
e
n
…
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
h
e
 
p
o
i
n
t
e
r
s
 
c
r
o
s
s
"
,
 
"
A
 
m
i
s
m
a
t
c
h
 
i
s
 
f
o
u
n
d
"
,
 
"
T
h
e
 
s
t
r
i
n
g
 
l
e
n
g
t
h
 
i
s
 
e
v
e
n
"
,
 
"
A
 
v
o
w
e
l
 
a
p
p
e
a
r
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
O
n
e
 
m
i
s
m
a
t
c
h
 
p
r
o
v
e
s
 
i
t
 
i
s
 
n
o
t
 
a
 
p
a
l
i
n
d
r
o
m
e
,
 
s
o
 
w
e
 
r
e
t
u
r
n
 
i
m
m
e
d
i
a
t
e
l
y
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
o
r
 
b
r
u
t
e
-
f
o
r
c
e
 
s
u
b
s
t
r
i
n
g
 
s
e
a
r
c
h
 
o
n
 
a
 
t
e
x
t
 
o
f
 
l
e
n
g
t
h
 
n
 
a
n
d
 
p
a
t
t
e
r
n
 
o
f
 
l
e
n
g
t
h
 
m
,
 
t
h
e
 
w
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
 
i
s
…
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
n
 
+
 
m
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
 
m
)
"
,
 
"
O
(
n
 
·
 
m
)
"
,
 
"
O
(
m
²
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
U
p
 
t
o
 
(
n
 
−
 
m
 
+
 
1
)
 
a
l
i
g
n
m
e
n
t
s
 
e
a
c
h
 
d
o
i
n
g
 
u
p
 
t
o
 
m
 
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
 
→
 
O
(
n
 
·
 
m
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
 
i
s
 
O
(
n
²
)
 
i
n
 
P
y
t
h
o
n
 
b
e
c
a
u
s
e
 
o
f
 
s
t
r
i
n
g
 
i
m
m
u
t
a
b
i
l
i
t
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
I
t
e
r
a
t
i
n
g
 
o
n
c
e
 
w
i
t
h
 
s
[
i
]
"
,


 
 
 
 
 
 
 
 
"
C
o
m
p
a
r
i
n
g
 
s
 
=
=
 
t
"
,


 
 
 
 
 
 
 
 
"
C
o
n
c
a
t
e
n
a
t
i
n
g
 
o
n
e
 
c
h
a
r
a
c
t
e
r
 
p
e
r
 
l
o
o
p
 
i
t
e
r
a
t
i
o
n
:
 
o
u
t
 
=
 
o
u
t
 
+
 
c
"
,


 
 
 
 
 
 
 
 
"
S
l
i
c
i
n
g
 
s
[
0
:
5
]
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
E
a
c
h
 
c
o
n
c
a
t
e
n
a
t
i
o
n
 
c
o
p
i
e
s
 
t
h
e
 
w
h
o
l
e
 
a
c
c
u
m
u
l
a
t
e
d
 
s
t
r
i
n
g
.
 
U
s
e
 
a
 
l
i
s
t
 
a
n
d
 
'
'
.
j
o
i
n
(
.
.
.
)
 
f
o
r
 
O
(
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
S
t
r
i
n
g
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
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
5
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
S
t
r
i
n
g
 
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
 
i
s
 
h
a
l
f
 
o
f
 
e
v
e
r
y
 
e
a
s
y
/
m
e
d
i
u
m
 
i
n
t
e
r
v
i
e
w
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
w
o
-
P
o
i
n
t
e
r
 
&
 
S
l
i
d
i
n
g
 
W
i
n
d
o
w
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


