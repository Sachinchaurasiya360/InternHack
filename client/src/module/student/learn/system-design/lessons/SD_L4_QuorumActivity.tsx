
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
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
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
,
 
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
 
D
a
t
a
b
a
s
e
,
 
G
l
o
b
e
,
 
S
l
i
d
e
r
s
,
 
X
C
i
r
c
l
e
 
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
 
E
n
g
i
n
e
e
r
i
n
g
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
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
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
1
.
1
5
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
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
9
2
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
D
e
f
i
n
i
t
i
o
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
T
h
e
 
N
,
 
W
,
 
R
 
c
o
n
t
r
a
c
t
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
I
n
 
a
 
r
e
p
l
i
c
a
t
e
d
 
s
y
s
t
e
m
,
 
a
 
w
r
i
t
e
 
d
o
e
s
n
&
r
s
q
u
o
;
t
 
g
o
 
t
o
 
o
n
e
 
n
o
d
e
 
—
 
i
t
 
g
o
e
s
 
t
o
 
a
s
 
m
a
n
y
 
a
s
 
y
o
u


 
 
 
 
 
 
 
 
r
e
q
u
i
r
e
 
b
e
f
o
r
e
 
t
h
e
 
w
r
i
t
e
 
i
s
 
a
c
k
n
o
w
l
e
d
g
e
d
.
 
S
a
m
e
 
f
o
r
 
r
e
a
d
s
.
 
T
h
e
 
t
h
r
e
e
 
n
u
m
b
e
r
s
 
t
h
a
t
 
g
o
v
e
r
n


 
 
 
 
 
 
 
 
t
h
i
s
 
a
r
e
 
<
b
>
N
<
/
b
>
,
 
<
b
>
W
<
/
b
>
,
 
a
n
d
 
<
b
>
R
<
/
b
>
.


 
 
 
 
 
 
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
3
 
g
a
p
-
3
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
N
"
,
 
n
a
m
e
:
 
"
R
e
p
l
i
c
a
t
i
o
n
 
f
a
c
t
o
r
"
,
 
v
:
 
"
H
o
w
 
m
a
n
y
 
c
o
p
i
e
s
 
o
f
 
e
a
c
h
 
r
o
w
 
e
x
i
s
t
.
 
T
y
p
i
c
a
l
l
y
 
3
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
"
,
 
n
a
m
e
:
 
"
W
r
i
t
e
 
q
u
o
r
u
m
"
,
 
v
:
 
"
H
o
w
 
m
a
n
y
 
c
o
p
i
e
s
 
m
u
s
t
 
a
c
k
 
a
 
w
r
i
t
e
 
b
e
f
o
r
e
 
t
h
e
 
c
l
i
e
n
t
 
g
e
t
s
 
a
 
s
u
c
c
e
s
s
 
r
e
s
p
o
n
s
e
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
R
"
,
 
n
a
m
e
:
 
"
R
e
a
d
 
q
u
o
r
u
m
"
,
 
v
:
 
"
H
o
w
 
m
a
n
y
 
c
o
p
i
e
s
 
m
u
s
t
 
r
e
s
p
o
n
d
 
b
e
f
o
r
e
 
a
 
r
e
a
d
 
i
s
 
c
o
n
s
i
d
e
r
e
d
 
s
u
c
c
e
s
s
f
u
l
.
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
c
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
.
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
5
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
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
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
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
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
1
0
 
}
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
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
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
 
3
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
3
6
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
 
8
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
 
`
$
{
S
D
}
1
8
`
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
S
D
}
5
5
`
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
 
M
O
N
O
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
1
.
1
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
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
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
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
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
9
r
e
m
"
 
}
}
>
{
c
.
n
a
m
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
/
d
i
v
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
4
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
c
.
v
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
 
d
e
l
a
y
:
 
0
.
3
 
}
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
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
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
 
1
0
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
S
D
}
5
5
`
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
 
`
$
{
S
D
}
1
0
`
 
}
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
 
M
O
N
O
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
6
6
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
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
G
O
L
D
E
N
 
R
U
L
E


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
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
1
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
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
 
7
0
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
W
 
+
 
R
 
&
g
t
;
 
N
 
&
n
b
s
p
;
 
⇒
 
&
n
b
s
p
;
 
r
e
a
d
s
 
s
e
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
 
w
r
i
t
e


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
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
6
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
I
f
 
t
h
e
 
r
e
a
d
 
q
u
o
r
u
m
 
o
v
e
r
l
a
p
s
 
t
h
e
 
w
r
i
t
e
 
q
u
o
r
u
m
 
b
y
 
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
 
n
o
d
e
,
 
t
h
a
t
 
o
v
e
r
l
a
p
p
i
n
g
 
n
o
d
e


 
 
 
 
 
 
 
 
 
 
i
s
 
g
u
a
r
a
n
t
e
e
d
 
t
o
 
h
a
v
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
 
w
r
i
t
e
.
 
P
i
c
k
 
a
 
h
i
g
h
 
W
 
f
o
r
 
w
r
i
t
e
 
d
u
r
a
b
i
l
i
t
y
;
 
a
 
h
i
g
h
 
R
 
f
o
r


 
 
 
 
 
 
 
 
 
 
f
r
e
s
h
 
r
e
a
d
s
;
 
b
a
l
a
n
c
e
 
t
h
e
 
t
w
o
 
f
o
r
 
l
a
t
e
n
c
y
.


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
6
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
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
 
8
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
}
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
 
M
O
N
O
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
6
6
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
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
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
6
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
C
a
s
s
a
n
d
r
a
<
/
b
>
 
e
x
p
o
s
e
s
 
c
o
n
s
i
s
t
e
n
c
y
 
l
e
v
e
l
s
 
p
e
r
 
q
u
e
r
y
 
(
O
N
E
,
 
Q
U
O
R
U
M
,
 
A
L
L
)
.
 
<
b
>
D
y
n
a
m
o
D
B
<
/
b
>


 
 
 
 
 
 
 
 
 
 
{
"
 
"
}
d
e
f
a
u
l
t
s
 
t
o
 
e
v
e
n
t
u
a
l
 
r
e
a
d
s
 
(
R
=
1
)
 
b
u
t
 
l
e
t
s
 
y
o
u
 
o
p
t
 
i
n
t
o
 
s
t
r
o
n
g
l
y
-
c
o
n
s
i
s
t
e
n
t
 
r
e
a
d
s


 
 
 
 
 
 
 
 
 
 
(
e
f
f
e
c
t
i
v
e
l
y
 
R
=
N
)
.
 
<
b
>
R
i
a
k
<
/
b
>
 
m
a
d
e
 
N
/
W
/
R
 
t
h
e
 
l
i
t
e
r
a
l
 
A
P
I
 
k
n
o
b
s
.
 
<
b
>
Q
u
o
r
u
m
=
c
e
i
l
(
(
N
+
1
)
/
2
)
<
/
b
>


 
 
 
 
 
 
 
 
 
 
{
"
 
"
}
f
o
r
 
b
o
t
h
 
r
e
a
d
s
 
a
n
d
 
w
r
i
t
e
s
 
i
s
 
t
h
e
 
d
e
f
a
u
l
t
 
s
a
f
e
 
c
h
o
i
c
e
.


 
 
 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
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
 
q
u
o
r
u
m
 
s
l
i
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
N
 
=
 
5
;


t
y
p
e
 
N
o
d
e
V
e
r
 
=
 
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
;
 
v
e
r
s
i
o
n
:
 
n
u
m
b
e
r
 
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
 
Q
u
o
r
u
m
D
e
m
o
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
,
 
s
e
t
W
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
3
)
;


 
 
c
o
n
s
t
 
[
r
,
 
s
e
t
R
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
3
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
<
"
i
d
l
e
"
 
|
 
"
w
r
i
t
i
n
g
"
 
|
 
"
w
r
i
t
t
e
n
"
 
|
 
"
r
e
a
d
i
n
g
"
 
|
 
"
r
e
a
d
"
>
(
"
i
d
l
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
n
o
d
e
s
,
 
s
e
t
N
o
d
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
N
o
d
e
V
e
r
[
]
>
(


 
 
 
 
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
 
N
 
}
,
 
(
_
,
 
i
)
 
=
>
 
(
{
 
i
d
:
 
i
,
 
v
e
r
s
i
o
n
:
 
0
 
}
)
)
,


 
 
)
;


 
 
c
o
n
s
t
 
[
r
e
a
d
Q
u
o
r
u
m
,
 
s
e
t
R
e
a
d
Q
u
o
r
u
m
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
n
u
m
b
e
r
[
]
>
(
[
]
)
;




 
 
c
o
n
s
t
 
s
a
f
e
 
=
 
w
 
+
 
r
 
>
 
N
;


 
 
c
o
n
s
t
 
w
r
i
t
e
Q
u
o
r
u
m
 
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


 
 
 
 
/
/
 
f
i
r
s
t
 
w
 
n
o
d
e
s
 
g
e
t
 
t
h
e
 
n
e
w
 
v
a
l
u
e
 
(
d
e
t
e
r
m
i
n
i
s
t
i
c
 
f
o
r
 
c
l
a
r
i
t
y
)


 
 
 
 
r
e
t
u
r
n
 
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
 
w
 
}
,
 
(
_
,
 
i
)
 
=
>
 
i
)
;


 
 
}
,
 
[
w
]
)
;




 
 
c
o
n
s
t
 
d
o
W
r
i
t
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
t
e
p
(
"
w
r
i
t
i
n
g
"
)
;


 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
N
o
d
e
s
(
(
n
s
)
 
=
>
 
n
s
.
m
a
p
(
(
n
)
 
=
>
 
(
w
r
i
t
e
Q
u
o
r
u
m
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
n
.
i
d
)
 
?
 
{
 
.
.
.
n
,
 
v
e
r
s
i
o
n
:
 
n
.
v
e
r
s
i
o
n
 
+
 
1
 
}
 
:
 
n
)
)
)
;


 
 
 
 
 
 
s
e
t
S
t
e
p
(
"
w
r
i
t
t
e
n
"
)
;


 
 
 
 
}
,
 
7
0
0
)
;


 
 
}
;




 
 
c
o
n
s
t
 
d
o
R
e
a
d
 
=
 
(
)
 
=
>
 
{


 
 
 
 
/
/
 
p
i
c
k
 
R
 
n
o
d
e
s
 
(
s
k
e
w
e
d
 
t
o
w
a
r
d
 
l
a
t
e
r
 
n
o
d
e
s
 
t
o
 
m
a
k
e
 
t
h
e
 
o
v
e
r
l
a
p
 
q
u
e
s
t
i
o
n
 
i
n
t
e
r
e
s
t
i
n
g
)


 
 
 
 
c
o
n
s
t
 
o
r
d
e
r
 
=
 
[
N
 
-
 
1
,
 
N
 
-
 
2
,
 
N
 
-
 
3
,
 
N
 
-
 
4
,
 
N
 
-
 
5
]
.
s
l
i
c
e
(
0
,
 
r
)
;


 
 
 
 
s
e
t
R
e
a
d
Q
u
o
r
u
m
(
o
r
d
e
r
)
;


 
 
 
 
s
e
t
S
t
e
p
(
"
r
e
a
d
i
n
g
"
)
;


 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
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
"
r
e
a
d
"
)
,
 
7
0
0
)
;


 
 
}
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
t
e
p
(
"
i
d
l
e
"
)
;


 
 
 
 
s
e
t
N
o
d
e
s
(
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
 
N
 
}
,
 
(
_
,
 
i
)
 
=
>
 
(
{
 
i
d
:
 
i
,
 
v
e
r
s
i
o
n
:
 
0
 
}
)
)
)
;


 
 
 
 
s
e
t
R
e
a
d
Q
u
o
r
u
m
(
[
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
e
e
n
L
a
t
e
s
t
 
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
s
t
e
p
 
!
=
=
 
"
r
e
a
d
"
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
 
v
e
r
s
i
o
n
s
 
=
 
r
e
a
d
Q
u
o
r
u
m
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
v
e
r
s
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
 
M
a
t
h
.
m
a
x
(
.
.
.
v
e
r
s
i
o
n
s
)
;


 
 
}
,
 
[
s
t
e
p
,
 
r
e
a
d
Q
u
o
r
u
m
,
 
n
o
d
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
 
e
x
p
e
c
t
e
d
L
a
t
e
s
t
 
=
 
n
o
d
e
s
.
r
e
d
u
c
e
(
(
m
,
 
n
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
m
,
 
n
.
v
e
r
s
i
o
n
)
,
 
0
)
;


 
 
c
o
n
s
t
 
r
e
a
d
R
e
t
u
r
n
s
L
a
t
e
s
t
 
=
 
s
e
e
n
L
a
t
e
s
t
 
=
=
=
 
e
x
p
e
c
t
e
d
L
a
t
e
s
t
 
&
&
 
e
x
p
e
c
t
e
d
L
a
t
e
s
t
 
>
 
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
D
r
a
g
 
W
 
a
n
d
 
R
.
 
T
h
e
n
 
w
r
i
t
e
 
a
n
d
 
r
e
a
d
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
F
i
v
e
 
r
e
p
l
i
c
a
s
.
 
E
a
c
h
 
s
l
i
d
e
r
 
p
i
c
k
s
 
h
o
w
 
m
a
n
y
 
c
o
p
i
e
s
 
m
u
s
t
 
a
g
r
e
e
.
 
W
r
i
t
e
 
a
 
v
a
l
u
e
,
 
t
h
e
n
 
r
e
a
d
.


 
 
 
 
 
 
 
 
I
f
 
<
c
o
d
e
 
s
t
y
l
e
=
{
{
 
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
 
M
O
N
O
 
}
}
>
W
 
+
 
R
 
&
g
t
;
 
N
<
/
c
o
d
e
>
,
 
t
h
e
 
r
e
a
d
 
q
u
o
r
u
m
 
i
s
 
g
u
a
r
a
n
t
e
e
d


 
 
 
 
 
 
 
 
t
o
 
o
v
e
r
l
a
p
 
t
h
e
 
w
r
i
t
e
 
q
u
o
r
u
m
,
 
s
o
 
r
e
a
d
s
 
s
e
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
 
w
r
i
t
e
.


 
 
 
 
 
 
<
/
p
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
0
b
1
2
2
0
"
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
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
S
l
i
d
e
r
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
6
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
C
o
n
t
r
o
l
 
l
a
b
e
l
=
"
W
 
(
w
r
i
t
e
 
q
u
o
r
u
m
)
"
 
v
a
l
u
e
=
{
w
}
 
s
e
t
V
a
l
u
e
=
{
(
v
)
 
=
>
 
{
 
s
e
t
W
(
v
)
;
 
r
e
s
e
t
(
)
;
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
C
o
n
t
r
o
l
 
l
a
b
e
l
=
"
R
 
(
r
e
a
d
 
q
u
o
r
u
m
)
"
 
v
a
l
u
e
=
{
r
}
 
s
e
t
V
a
l
u
e
=
{
(
v
)
 
=
>
 
{
 
s
e
t
R
(
v
)
;
 
r
e
s
e
t
(
)
;
 
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




 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
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


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
s
a
f
e
 
?
 
`
$
{
S
D
}
8
8
`
 
:
 
`
$
{
W
A
R
N
}
8
8
`
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
C
o
l
o
r
:
 
s
a
f
e
 
?
 
`
$
{
S
D
}
1
0
`
 
:
 
`
$
{
W
A
R
N
}
1
0
`
,


 
 
 
 
 
 
 
 
 
 
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
 
}
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
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
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
 
8
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
S
D
}
8
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
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


 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
 
M
O
N
O
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
8
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
 
"
#
e
5
e
7
e
b
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
 
7
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
W
=
{
w
}
 
·
 
R
=
{
r
}
 
·
 
N
=
{
N
}
 
&
n
b
s
p
;
&
n
b
s
p
;
 
W
+
R
=
{
w
 
+
 
r
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
S
t
r
i
n
g
(
s
a
f
e
)
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
 
-
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
 
6
 
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
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
O
N
O
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
8
p
x
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
s
a
f
e
 
?
 
S
D
 
:
 
W
A
R
N
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
 
s
a
f
e
 
?
 
`
$
{
S
D
}
2
2
`
 
:
 
`
$
{
W
A
R
N
}
2
2
`
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
p
x
 
s
o
l
i
d
 
$
{
s
a
f
e
 
?
 
S
D
 
:
 
W
A
R
N
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
f
e
 
?
 
"
S
T
R
O
N
G
L
Y
 
C
O
N
S
I
S
T
E
N
T
"
 
:
 
"
E
V
E
N
T
U
A
L
L
Y
 
C
O
N
S
I
S
T
E
N
T
"
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
s
p
a
n
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
 
F
i
v
e
 
r
e
p
l
i
c
a
 
n
o
d
e
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
5
 
g
a
p
-
3
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
{
n
o
d
e
s
.
m
a
p
(
(
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
 
i
n
W
r
i
t
e
 
=
 
w
r
i
t
e
Q
u
o
r
u
m
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
 
i
n
R
e
a
d
 
=
 
r
e
a
d
Q
u
o
r
u
m
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
 
s
t
a
l
e
 
=
 
n
.
v
e
r
s
i
o
n
 
=
=
=
 
0
 
&
&
 
s
t
e
p
 
!
=
=
 
"
i
d
l
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
r
e
s
h
 
=
 
n
.
v
e
r
s
i
o
n
 
>
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
f
r
e
s
h
 
?
 
S
D
 
:
 
s
t
a
l
e
 
?
 
N
E
U
T
R
A
L
 
:
 
N
E
U
T
R
A
L
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
n
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
i
n
R
e
a
d
 
&
&
 
s
t
e
p
 
=
=
=
 
"
r
e
a
d
"
 
?
 
W
A
R
N
 
:
 
c
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
C
o
l
o
r
:
 
f
r
e
s
h
 
?
 
`
$
{
S
D
}
1
8
`
 
:
 
"
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
}
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
a
d
d
i
n
g
:
 
"
1
2
p
x
 
8
p
x
"
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
 
8
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
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
D
a
t
a
b
a
s
e
 
c
l
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
 
c
o
l
o
r
:
 
c
 
}
}
 
/
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
 
M
O
N
O
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
4
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
 
7
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
m
a
r
g
i
n
T
o
p
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
{
n
.
i
d
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
 
s
t
y
l
e
=
{
{
 
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
 
M
O
N
O
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
6
6
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
 
c
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
{
n
.
v
e
r
s
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
W
r
i
t
e
 
&
&
 
s
t
e
p
 
=
=
=
 
"
w
r
i
t
i
n
g
"
 
&
&
 
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
 
s
c
a
l
e
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
 
s
c
a
l
e
:
 
1
 
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
 
}
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
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
-
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
:
 
-
8
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
 
S
D
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
 
9
9
9
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
6
p
x
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
 
M
O
N
O
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
6
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
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
R
e
a
d
 
&
&
 
s
t
e
p
 
=
=
=
 
"
r
e
a
d
i
n
g
"
 
&
&
 
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
 
s
c
a
l
e
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
 
s
c
a
l
e
:
 
1
 
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
 
}
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
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
-
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
:
 
-
8
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
 
W
A
R
N
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
 
9
9
9
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
6
p
x
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
 
M
O
N
O
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
6
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
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
r
o
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
5
 
}
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
d
o
W
r
i
t
e
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
 
"
w
r
i
t
i
n
g
"
 
|
|
 
s
t
e
p
 
=
=
=
 
"
r
e
a
d
i
n
g
"
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
b
t
n
S
t
y
l
e
(
S
D
,
 
s
t
e
p
 
=
=
=
 
"
w
r
i
t
i
n
g
"
 
|
|
 
s
t
e
p
 
=
=
=
 
"
r
e
a
d
i
n
g
"
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
①
 
w
r
i
t
e
 
x
 
=
 
"
v
{
n
o
d
e
s
[
0
]
.
v
e
r
s
i
o
n
 
+
 
1
}
"


 
 
 
 
 
 
 
 
 
 
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
5
 
}
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
d
o
R
e
a
d
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
 
!
=
=
 
"
w
r
i
t
t
e
n
"
 
&
&
 
s
t
e
p
 
!
=
=
 
"
r
e
a
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
b
t
n
S
t
y
l
e
(
W
A
R
N
,
 
s
t
e
p
 
!
=
=
 
"
w
r
i
t
t
e
n
"
 
&
&
 
s
t
e
p
 
!
=
=
 
"
r
e
a
d
"
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
②
 
r
e
a
d
 
x


 
 
 
 
 
 
 
 
 
 
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
5
 
}
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
r
e
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
b
t
n
S
t
y
l
e
(
N
E
U
T
R
A
L
,
 
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
O
u
t
c
o
m
e
 
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


 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
"
r
e
a
d
"
 
&
&
 
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
"
r
e
a
d
-
r
e
s
u
l
t
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
 
y
:
 
-
8
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
T
o
p
:
 
1
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
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
:
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
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
 
6
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
6
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
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
a
d
R
e
t
u
r
n
s
L
a
t
e
s
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
 
h
-
5
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
 
S
D
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
C
i
r
c
l
e
 
c
l
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
 
W
A
R
N
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
 
}
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
a
d
R
e
t
u
r
n
s
L
a
t
e
s
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>
R
e
a
d
 
r
e
t
u
r
n
e
d
 
<
b
 
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
 
S
D
 
}
}
>
v
{
s
e
e
n
L
a
t
e
s
t
}
<
/
b
>
 
—
 
t
h
e
 
l
a
t
e
s
t
.
 
T
h
e
 
r
e
a
d
 
q
u
o
r
u
m
 
o
v
e
r
l
a
p
s
 
t
h
e
 
w
r
i
t
e
 
q
u
o
r
u
m
.
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>
R
e
a
d
 
r
e
t
u
r
n
e
d
 
<
b
 
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
 
W
A
R
N
 
}
}
>
v
{
s
e
e
n
L
a
t
e
s
t
}
<
/
b
>
 
—
 
b
u
t
 
t
h
e
 
l
a
t
e
s
t
 
w
r
i
t
e
 
w
a
s
 
v
{
e
x
p
e
c
t
e
d
L
a
t
e
s
t
}
.
 
T
h
e
 
q
u
o
r
u
m
s
 
d
o
n
&
r
s
q
u
o
;
t
 
o
v
e
r
l
a
p
.
 
<
i
>
E
v
e
n
t
u
a
l
 
c
o
n
s
i
s
t
e
n
c
y
.
<
/
i
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
}


 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
S
l
i
d
e
r
C
o
n
t
r
o
l
(
{
 
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
 
s
e
t
V
a
l
u
e
 
}
:
 
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
 
n
u
m
b
e
r
;
 
s
e
t
V
a
l
u
e
:
 
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
 
=
>
 
v
o
i
d
 
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
f
l
e
x
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
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
 
M
O
N
O
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
2
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
 
7
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
 
}
}
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
 
s
t
y
l
e
=
{
{
 
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
 
M
O
N
O
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
2
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
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
=
 
{
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
/
d
i
v
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
f
l
e
x
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
{
[
1
,
 
2
,
 
3
,
 
4
,
 
5
]
.
m
a
p
(
(
v
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
 
v
 
=
=
=
 
v
a
l
u
e
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
e
d
 
=
 
v
 
<
=
 
v
a
l
u
e
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
v
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
V
a
l
u
e
(
v
)
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
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
0
"
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
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
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
a
c
t
i
v
e
 
?
 
S
D
 
:
 
f
i
l
l
e
d
 
?
 
`
$
{
S
D
}
5
5
`
 
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
3
)
"
}
`
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
 
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
3
3
`
 
:
 
f
i
l
l
e
d
 
?
 
`
$
{
S
D
}
1
4
`
 
:
 
"
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
S
D
 
:
 
f
i
l
l
e
d
 
?
 
`
$
{
S
D
}
`
 
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
 
M
O
N
O
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
8
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
 
7
0
0
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
o
r
d
e
r
-
c
o
l
o
r
 
0
.
1
8
s
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
 
0
.
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
 
b
t
n
S
t
y
l
e
(
c
o
l
o
r
:
 
s
t
r
i
n
g
,
 
d
i
s
a
b
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
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
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


 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
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
 
6
,


 
 
 
 
c
u
r
s
o
r
:
 
d
i
s
a
b
l
e
d
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
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
d
i
s
a
b
l
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
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
 
:
 
c
o
l
o
r
}
`
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
 
d
i
s
a
b
l
e
d
 
?
 
"
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
 
:
 
`
$
{
c
o
l
o
r
}
1
8
`
,


 
 
 
 
c
o
l
o
r
:
 
d
i
s
a
b
l
e
d
 
?
 
N
E
U
T
R
A
L
 
:
 
c
o
l
o
r
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
 
M
O
N
O
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
2
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
 
7
0
0
,


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
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
,


 
 
 
 
o
p
a
c
i
t
y
:
 
d
i
s
a
b
l
e
d
 
?
 
0
.
5
 
:
 
1
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
a
l
l
 
0
.
1
8
s
"
,


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
R
e
a
l
 
c
o
n
f
i
g
u
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
C
O
N
F
I
G
S
:
 
{
 
n
a
m
e
:
 
s
t
r
i
n
g
;
 
n
:
 
n
u
m
b
e
r
;
 
w
:
 
n
u
m
b
e
r
;
 
r
:
 
n
u
m
b
e
r
;
 
p
r
o
f
i
l
e
:
 
s
t
r
i
n
g
;
 
r
e
a
s
o
n
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
 
n
a
m
e
:
 
"
D
e
f
a
u
l
t
 
s
a
f
e
"
,
 
n
:
 
3
,
 
w
:
 
2
,
 
r
:
 
2
,
 
p
r
o
f
i
l
e
:
 
"
S
t
r
o
n
g
 
r
e
a
d
s
 
·
 
m
e
d
i
u
m
 
w
r
i
t
e
/
r
e
a
d
 
l
a
t
e
n
c
y
"
,
 
r
e
a
s
o
n
:
 
"
W
+
R
=
4
 
>
 
N
=
3
.
 
M
o
s
t
 
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
 
s
y
s
t
e
m
s
 
s
t
a
r
t
 
h
e
r
e
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
R
e
a
d
-
h
e
a
v
y
 
a
p
p
"
,
 
n
:
 
3
,
 
w
:
 
3
,
 
r
:
 
1
,
 
p
r
o
f
i
l
e
:
 
"
F
a
s
t
 
r
e
a
d
s
 
·
 
s
l
o
w
 
w
r
i
t
e
s
"
,
 
r
e
a
s
o
n
:
 
"
E
v
e
r
y
 
r
e
p
l
i
c
a
 
h
a
s
 
t
h
e
 
v
a
l
u
e
.
 
R
=
1
 
h
i
t
s
 
a
n
y
 
n
o
d
e
 
a
n
d
 
g
e
t
s
 
t
h
e
 
l
a
t
e
s
t
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
W
r
i
t
e
-
h
e
a
v
y
 
l
o
g
"
,
 
n
:
 
3
,
 
w
:
 
1
,
 
r
:
 
3
,
 
p
r
o
f
i
l
e
:
 
"
F
a
s
t
 
w
r
i
t
e
s
 
·
 
s
l
o
w
 
r
e
a
d
s
"
,
 
r
e
a
s
o
n
:
 
"
W
=
1
 
a
c
k
s
 
i
n
s
t
a
n
t
l
y
.
 
R
e
a
d
s
 
m
u
s
t
 
c
h
e
c
k
 
a
l
l
 
r
e
p
l
i
c
a
s
 
t
o
 
f
i
n
d
 
t
h
e
 
f
r
e
s
h
e
s
t
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
E
v
e
n
t
u
a
l
l
y
 
c
o
n
s
i
s
t
e
n
t
"
,
 
n
:
 
3
,
 
w
:
 
1
,
 
r
:
 
1
,
 
p
r
o
f
i
l
e
:
 
"
L
o
w
e
s
t
 
l
a
t
e
n
c
y
 
·
 
s
t
a
l
e
 
r
e
a
d
s
 
p
o
s
s
i
b
l
e
"
,
 
r
e
a
s
o
n
:
 
"
W
+
R
=
2
,
 
n
o
t
 
g
r
e
a
t
e
r
 
t
h
a
n
 
N
.
 
C
a
s
s
a
n
d
r
a
 
O
N
E
 
c
o
n
s
i
s
t
e
n
c
y
,
 
D
y
n
a
m
o
D
B
 
d
e
f
a
u
l
t
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
M
a
x
i
m
u
m
 
d
u
r
a
b
i
l
i
t
y
"
,
 
n
:
 
5
,
 
w
:
 
5
,
 
r
:
 
1
,
 
p
r
o
f
i
l
e
:
 
"
S
u
r
v
i
v
e
s
 
m
a
n
y
 
n
o
d
e
 
f
a
i
l
u
r
e
s
 
·
 
s
l
o
w
 
w
r
i
t
e
s
"
,
 
r
e
a
s
o
n
:
 
"
E
v
e
r
y
 
w
r
i
t
e
 
h
i
t
s
 
a
l
l
 
5
 
r
e
p
l
i
c
a
s
.
 
T
o
l
e
r
a
t
e
s
 
l
o
s
i
n
g
 
4
 
o
f
 
5
 
f
o
r
 
r
e
a
d
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
 
R
e
a
l
C
o
n
f
i
g
s
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
C
o
n
f
i
g
u
r
a
t
i
o
n
s
 
y
o
u
&
r
s
q
u
o
;
l
l
 
s
e
e
 
i
n
 
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
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
s
a
m
e
 
d
a
t
a
b
a
s
e
 
e
n
g
i
n
e
 
y
i
e
l
d
s
 
v
e
r
y
 
d
i
f
f
e
r
e
n
t
 
b
e
h
a
v
i
o
r
s
 
d
e
p
e
n
d
i
n
g
 
o
n
 
N
/
W
/
R
.
 
H
e
r
e
 
a
r
e
 
t
h
e


 
 
 
 
 
 
 
 
f
i
v
e
 
c
o
m
m
o
n
 
s
h
a
p
e
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
e
r
s
 
e
x
p
e
c
t
 
y
o
u
 
t
o
 
r
e
c
o
g
n
i
z
e
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
8
 
}
 
}
 
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
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
C
O
N
F
I
G
S
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
a
f
e
 
=
 
c
.
w
 
+
 
c
.
r
 
>
 
c
.
n
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
c
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
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
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
2
5
 
}
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
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
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
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
1
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
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
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
g
a
p
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
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
9
5
r
e
m
"
 
}
}
>
{
c
.
n
a
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
O
N
O
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
6
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
8
p
x
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
s
a
f
e
 
?
 
S
D
 
:
 
W
A
R
N
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
 
`
$
{
s
a
f
e
 
?
 
S
D
 
:
 
W
A
R
N
}
1
4
`
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
p
x
 
s
o
l
i
d
 
$
{
s
a
f
e
 
?
 
S
D
 
:
 
W
A
R
N
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
f
e
 
?
 
"
S
T
R
O
N
G
"
 
:
 
"
E
V
E
N
T
U
A
L
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
/
d
i
v
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
f
l
e
x
"
,
 
g
a
p
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
N
"
,
 
"
W
"
,
 
"
R
"
]
 
a
s
 
c
o
n
s
t
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
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
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
 
6
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
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
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
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
M
O
N
O
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
6
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
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
 
s
t
y
l
e
=
{
{
 
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
 
M
O
N
O
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
1
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
 
=
=
=
 
"
N
"
 
?
 
c
.
n
 
:
 
k
 
=
=
=
 
"
W
"
 
?
 
c
.
w
 
:
 
c
.
r
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
 
s
t
y
l
e
=
{
{
 
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
 
M
O
N
O
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
 
S
D
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
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
p
r
o
f
i
l
e
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
 
s
t
y
l
e
=
{
{
 
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
4
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
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
c
.
r
e
a
s
o
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
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
4
_
Q
u
o
r
u
m
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
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
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
D
r
a
g
 
t
h
e
 
S
l
i
d
e
r
s
"
,
 
i
c
o
n
:
 
<
S
l
i
d
e
r
s
 
c
l
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
Q
u
o
r
u
m
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
e
a
l
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
o
n
f
i
g
u
r
a
t
i
o
n
s
"
,
 
i
c
o
n
:
 
<
G
l
o
b
e
 
c
l
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
R
e
a
l
C
o
n
f
i
g
s
 
/
>
 
}
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
 
E
n
g
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
N
=
5
,
 
W
=
3
,
 
R
=
3
.
 
I
s
 
t
h
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
s
i
s
t
e
n
t
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
o
,
 
o
n
l
y
 
e
v
e
n
t
u
a
l
l
y
 
c
o
n
s
i
s
t
e
n
t
.
"
,
 
"
Y
e
s
 
—
 
W
+
R
=
6
 
>
 
N
=
5
,
 
s
o
 
q
u
o
r
u
m
s
 
m
u
s
t
 
o
v
e
r
l
a
p
.
"
,
 
"
O
n
l
y
 
o
n
 
r
e
a
d
s
.
"
,
 
"
O
n
l
y
 
i
f
 
a
l
l
 
n
o
d
e
s
 
a
r
e
 
i
n
 
t
h
e
 
s
a
m
e
 
D
C
.
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
i
t
h
 
W
+
R
 
>
 
N
,
 
t
h
e
 
r
e
a
d
 
q
u
o
r
u
m
 
i
s
 
g
u
a
r
a
n
t
e
e
d
 
t
o
 
o
v
e
r
l
a
p
 
t
h
e
 
w
r
i
t
e
 
q
u
o
r
u
m
 
b
y
 
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
 
n
o
d
e
,
 
s
o
 
r
e
a
d
s
 
s
e
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
 
w
r
i
t
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
Y
o
u
 
w
a
n
t
 
f
a
s
t
 
r
e
a
d
s
 
a
n
d
 
d
o
n
'
t
 
m
i
n
d
 
s
l
o
w
 
w
r
i
t
e
s
.
 
B
e
s
t
 
N
/
W
/
R
 
f
o
r
 
N
=
3
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
W
=
1
,
 
R
=
3
"
,
 
"
W
=
3
,
 
R
=
1
"
,
 
"
W
=
1
,
 
R
=
1
"
,
 
"
W
=
2
,
 
R
=
2
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
=
3
 
f
o
r
c
e
s
 
e
v
e
r
y
 
r
e
p
l
i
c
a
 
t
o
 
h
a
v
e
 
t
h
e
 
v
a
l
u
e
 
b
e
f
o
r
e
 
a
c
k
,
 
s
o
 
a
n
y
 
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
 
h
a
s
 
i
t
.
 
R
=
1
 
t
h
e
n
 
h
i
t
s
 
t
h
e
 
c
l
o
s
e
s
t
 
n
o
d
e
,
 
s
e
r
v
e
d
 
f
a
s
t
e
s
t
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
y
n
a
m
o
D
B
 
d
e
f
a
u
l
t
 
r
e
a
d
s
.
 
W
h
a
t
'
s
 
t
h
e
 
r
o
u
g
h
 
N
/
W
/
R
 
e
q
u
i
v
a
l
e
n
t
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
W
=
N
,
 
R
=
N
 
(
s
t
r
o
n
g
)
"
,
 
"
W
=
q
u
o
r
u
m
,
 
R
=
1
 
(
e
v
e
n
t
u
a
l
)
"
,
 
"
W
=
1
,
 
R
=
N
 
(
r
e
a
d
-
r
e
p
a
i
r
)
"
,
 
"
W
=
1
,
 
R
=
1
 
(
b
e
s
t
 
e
f
f
o
r
t
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
D
y
n
a
m
o
D
B
 
a
c
k
n
o
w
l
e
d
g
e
s
 
w
r
i
t
e
s
 
a
f
t
e
r
 
a
 
q
u
o
r
u
m
 
(
o
r
 
o
n
e
 
n
o
d
e
 
a
n
d
 
a
s
y
n
c
 
r
e
p
l
i
c
a
t
e
s
)
,
 
a
n
d
 
d
e
f
a
u
l
t
 
r
e
a
d
s
 
h
i
t
 
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
.
 
T
h
a
t
'
s
 
e
v
e
n
t
u
a
l
 
c
o
n
s
i
s
t
e
n
c
y
 
u
n
l
e
s
s
 
y
o
u
 
o
p
t
 
i
n
t
o
 
s
t
r
o
n
g
l
y
-
c
o
n
s
i
s
t
e
n
t
 
r
e
a
d
s
 
(
e
f
f
e
c
t
i
v
e
l
y
 
R
=
N
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
y
 
i
s
 
t
h
e
 
W
+
R
 
>
 
N
 
r
u
l
e
 
c
a
l
l
e
d
 
'
s
t
r
i
c
t
'
 
b
u
t
 
r
e
a
l
 
s
y
s
t
e
m
s
 
s
o
m
e
t
i
m
e
s
 
s
t
i
l
l
 
s
e
e
 
a
n
o
m
a
l
i
e
s
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
h
e
 
r
u
l
e
 
i
s
 
w
r
o
n
g
.
"
,


 
 
 
 
 
 
 
 
"
N
e
t
w
o
r
k
 
p
a
r
t
i
t
i
o
n
s
 
c
a
n
 
p
r
e
v
e
n
t
 
t
h
e
 
q
u
o
r
u
m
 
f
r
o
m
 
b
e
i
n
g
 
r
e
a
c
h
e
d
,
 
s
o
 
t
h
e
 
s
y
s
t
e
m
 
s
t
a
l
l
s
 
o
r
 
r
e
t
u
r
n
s
 
e
r
r
o
r
s
 
i
n
s
t
e
a
d
 
o
f
 
s
t
a
l
e
 
d
a
t
a
.
"
,


 
 
 
 
 
 
 
 
"
Q
u
o
r
u
m
s
 
o
n
l
y
 
w
o
r
k
 
i
n
 
2
4
-
n
o
d
e
 
c
l
u
s
t
e
r
s
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
l
 
s
y
s
t
e
m
s
 
d
o
n
'
t
 
r
e
p
l
i
c
a
t
e
.
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
Q
u
o
r
u
m
 
g
u
a
r
a
n
t
e
e
s
 
f
r
e
s
h
n
e
s
s
 
O
N
L
Y
 
w
h
e
n
 
t
h
e
 
q
u
o
r
u
m
 
c
a
n
 
b
e
 
a
s
s
e
m
b
l
e
d
.
 
D
u
r
i
n
g
 
a
 
p
a
r
t
i
t
i
o
n
,
 
t
h
e
 
m
i
n
o
r
i
t
y
 
s
i
d
e
 
e
i
t
h
e
r
 
e
r
r
o
r
s
 
o
u
t
 
(
C
P
)
 
o
r
 
s
e
r
v
e
s
 
s
t
a
l
e
 
(
A
P
)
.
 
T
h
e
 
r
u
l
e
 
i
s
 
a
b
o
u
t
 
c
o
r
r
e
c
t
n
e
s
s
,
 
n
o
t
 
a
v
a
i
l
a
b
i
l
i
t
y
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
E
n
g
i
n
e
e
r
i
n
g
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
Q
u
o
r
u
m
 
R
e
a
d
s
 
&
 
W
r
i
t
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
4
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
3
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
T
h
e
 
t
u
n
a
b
l
e
 
c
o
n
s
i
s
t
e
n
c
y
 
k
n
o
b
 
i
n
 
e
v
e
r
y
 
D
y
n
a
m
o
-
s
t
y
l
e
 
d
a
t
a
b
a
s
e
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


