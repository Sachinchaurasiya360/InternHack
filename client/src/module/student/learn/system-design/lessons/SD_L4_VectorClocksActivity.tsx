
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
l
o
c
k
,
 
G
i
t
M
e
r
g
e
,
 
R
o
t
a
t
e
C
c
w
,
 
U
s
e
r
 
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
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
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
W
a
l
l
-
c
l
o
c
k
 
t
i
m
e
 
l
i
e
s
.
 
V
e
c
t
o
r
 
c
l
o
c
k
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


 
 
 
 
 
 
 
 
I
n
 
a
 
d
i
s
t
r
i
b
u
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
 
y
o
u
 
c
a
n
&
r
s
q
u
o
;
t
 
t
r
u
s
t
 
e
a
c
h
 
s
e
r
v
e
r
&
r
s
q
u
o
;
s
 
c
l
o
c
k
 
—
 
t
h
e
y
 
d
r
i
f
t
,
 
l
e
a
p
,
 
a
n
d


 
 
 
 
 
 
 
 
h
o
p
 
t
i
m
e
 
z
o
n
e
s
.
 
<
b
>
V
e
c
t
o
r
 
c
l
o
c
k
s
<
/
b
>
 
i
n
s
t
e
a
d
 
t
r
a
c
k
 
p
e
r
-
n
o
d
e
 
l
o
g
i
c
a
l
 
c
o
u
n
t
e
r
s
.
 
T
w
o
 
c
l
o
c
k
s


 
 
 
 
 
 
 
 
l
e
t
 
y
o
u
 
d
e
c
i
d
e
 
i
f
 
e
v
e
n
t
 
A
 
<
i
>
h
a
p
p
e
n
e
d
-
b
e
f
o
r
e
<
/
i
>
 
B
,
 
B
 
h
a
p
p
e
n
e
d
-
b
e
f
o
r
e
 
A
,
 
o
r
 
w
h
e
t
h
e
r
 
t
h
e
y


 
 
 
 
 
 
 
 
a
r
e
 
c
o
n
c
u
r
r
e
n
t
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
h
a
p
p
e
n
s
-
b
e
f
o
r
e
 
(
A
 
→
 
B
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
v
:
 
"
E
v
e
r
y
 
e
n
t
r
y
 
o
f
 
A
 
i
s
 
≤
 
B
 
a
n
d
 
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
 
i
s
 
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
.
 
A
 
d
e
f
i
n
i
t
e
l
y
 
c
a
m
e
 
f
i
r
s
t
.
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


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
k
:
 
"
h
a
p
p
e
n
s
-
a
f
t
e
r
 
(
B
 
→
 
A
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
v
:
 
"
M
i
r
r
o
r
 
i
m
a
g
e
.
 
B
 
d
e
f
i
n
i
t
e
l
y
 
c
a
m
e
 
f
i
r
s
t
.
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


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
k
:
 
"
c
o
n
c
u
r
r
e
n
t
 
(
A
 
∥
 
B
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
v
:
 
"
N
e
i
t
h
e
r
 
d
o
m
i
n
a
t
e
s
.
 
T
h
e
 
t
w
o
 
e
v
e
n
t
s
 
w
e
r
e
 
i
n
d
e
p
e
n
d
e
n
t
.
 
T
h
i
s
 
i
s
 
t
h
e
 
c
o
n
f
l
i
c
t
 
s
i
g
n
a
l
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
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
 
c
o
l
o
r
:
 
c
.
c
o
l
o
r
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
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
R
U
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
8
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
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
/
/
 
e
a
c
h
 
n
o
d
e
 
k
e
e
p
s
 
a
 
v
e
c
t
o
r
 
V
 
i
n
d
e
x
e
d
 
b
y
 
n
o
d
e
 
i
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
b
r
 
/
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
 
}
}
>
1
.
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
O
n
 
a
 
l
o
c
a
l
 
e
v
e
n
t
,
 
i
n
c
r
e
m
e
n
t
 
y
o
u
r
 
o
w
n
 
s
l
o
t
:
 
<
c
o
d
e
>
V
[
m
e
]
 
+
=
 
1
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
<
b
r
 
/
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
 
}
}
>
2
.
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
O
n
 
s
e
n
d
,
 
a
t
t
a
c
h
 
<
c
o
d
e
>
V
<
/
c
o
d
e
>
 
t
o
 
t
h
e
 
m
e
s
s
a
g
e


 
 
 
 
 
 
 
 
 
 
<
b
r
 
/
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
 
}
}
>
3
.
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
O
n
 
r
e
c
e
i
v
e
,
 
m
e
r
g
e
:
 
<
c
o
d
e
>
V
[
i
]
 
=
 
m
a
x
(
V
[
i
]
,
 
m
s
g
.
V
[
i
]
)
<
/
c
o
d
e
>
 
f
o
r
 
e
v
e
r
y
 
i
,
 
t
h
e
n
 
b
u
m
p
 
y
o
u
r
 
o
w
n
 
s
l
o
t


 
 
 
 
 
 
 
 
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
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
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
 
s
h
i
p
s
 
v
e
c
t
o
r
 
c
l
o
c
k
s
 
i
n
 
i
t
s
 
A
P
I
,
 
e
x
p
o
s
i
n
g
 
s
i
b
l
i
n
g
s
 
(
c
o
n
c
u
r
r
e
n
t
 
v
e
r
s
i
o
n
s
)
 
t
o


 
 
 
 
 
 
 
 
 
 
t
h
e
 
a
p
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
o
r
 
r
e
s
o
l
u
t
i
o
n
.
 
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
 
u
s
e
s
 
s
i
m
p
l
e
r
 
l
a
s
t
-
w
r
i
t
e
-
w
i
n
s
 
b
y


 
 
 
 
 
 
 
 
 
 
t
i
m
e
s
t
a
m
p
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
 
h
i
s
t
o
r
i
c
a
l
l
y
 
u
s
e
d
 
v
e
c
t
o
r
 
c
l
o
c
k
s
;
 
m
o
d
e
r
n
 
m
u
l
t
i
-
r
e
g
i
o
n
 
w
r
i
t
e
s


 
 
 
 
 
 
 
 
 
 
u
s
e
 
t
h
e
m
 
u
n
d
e
r
 
t
h
e
 
h
o
o
d
.
 
C
o
n
f
l
i
c
t
 
d
e
t
e
c
t
i
o
n
 
i
n
 
<
b
>
G
o
o
g
l
e
 
D
o
c
s
<
/
b
>
,
 
<
b
>
F
i
g
m
a
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
 
C
R
D
T
s
<
/
b
>
 
i
s
 
b
u
i
l
t
 
o
n
 
t
h
e
 
s
a
m
e
 
i
d
e
a
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
 
C
o
n
c
u
r
r
e
n
t
 
e
d
i
t
 
t
i
m
e
l
i
n
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




i
n
t
e
r
f
a
c
e
 
E
v
e
n
t
 
{


 
 
w
h
o
:
 
"
A
"
 
|
 
"
B
"
;


 
 
v
:
 
{
 
A
:
 
n
u
m
b
e
r
;
 
B
:
 
n
u
m
b
e
r
 
}
;


 
 
c
m
d
:
 
s
t
r
i
n
g
;


 
 
s
y
n
c
e
d
F
r
o
m
?
:
 
{
 
A
:
 
n
u
m
b
e
r
;
 
B
:
 
n
u
m
b
e
r
 
}
;


}




t
y
p
e
 
S
c
e
n
a
r
i
o
 
=
 
"
c
o
n
c
u
r
r
e
n
t
"
 
|
 
"
s
e
q
u
e
n
t
i
a
l
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
 
C
o
n
c
u
r
r
e
n
t
E
d
i
t
(
)
 
{


 
 
c
o
n
s
t
 
[
s
c
e
n
a
r
i
o
,
 
s
e
t
S
c
e
n
a
r
i
o
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
S
c
e
n
a
r
i
o
>
(
"
c
o
n
c
u
r
r
e
n
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
 
e
v
e
n
t
s
:
 
E
v
e
n
t
[
]
 
=
 
s
c
e
n
a
r
i
o
 
=
=
=
 
"
c
o
n
c
u
r
r
e
n
t
"


 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
A
"
,
 
v
:
 
{
 
A
:
 
1
,
 
B
:
 
0
 
}
,
 
c
m
d
:
 
'
s
e
t
 
c
o
l
o
r
 
=
 
"
r
e
d
"
'
 
}
,


 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
B
"
,
 
v
:
 
{
 
A
:
 
0
,
 
B
:
 
1
 
}
,
 
c
m
d
:
 
'
s
e
t
 
c
o
l
o
r
 
=
 
"
b
l
u
e
"
'
 
}
,


 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
A
"
,
 
v
:
 
{
 
A
:
 
2
,
 
B
:
 
1
 
}
,
 
c
m
d
:
 
"
s
y
n
c
 
·
 
s
e
e
s
 
c
o
n
c
u
r
r
e
n
t
 
w
r
i
t
e
"
,
 
s
y
n
c
e
d
F
r
o
m
:
 
{
 
A
:
 
0
,
 
B
:
 
1
 
}
 
}
,


 
 
 
 
 
 
]


 
 
 
 
:
 
[


 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
A
"
,
 
v
:
 
{
 
A
:
 
1
,
 
B
:
 
0
 
}
,
 
c
m
d
:
 
'
s
e
t
 
c
o
l
o
r
 
=
 
"
r
e
d
"
'
 
}
,


 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
B
"
,
 
v
:
 
{
 
A
:
 
1
,
 
B
:
 
1
 
}
,
 
c
m
d
:
 
'
s
e
t
 
c
o
l
o
r
 
=
 
"
b
l
u
e
"
 
(
a
f
t
e
r
 
s
y
n
c
 
f
r
o
m
 
A
)
'
 
}
,


 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
A
"
,
 
v
:
 
{
 
A
:
 
2
,
 
B
:
 
1
 
}
,
 
c
m
d
:
 
'
s
y
n
c
 
·
 
s
e
e
s
 
B
 
h
a
p
p
e
n
e
d
-
a
f
t
e
r
'
 
}
,


 
 
 
 
 
 
]
;




 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
 
=
 
e
v
e
n
t
s
[
s
t
e
p
]
 
?
?
 
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
 
l
a
s
t
 
=
 
s
t
e
p
 
=
=
=
 
e
v
e
n
t
s
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
 
c
u
r
r
e
n
t
 
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
 
i
s
C
o
n
c
u
r
r
e
n
t
 
=
 
s
c
e
n
a
r
i
o
 
=
=
=
 
"
c
o
n
c
u
r
r
e
n
t
"
 
&
&
 
s
t
e
p
 
>
=
 
e
v
e
n
t
s
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
 
s
e
t
S
t
e
p
(
0
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
w
o
 
c
l
i
e
n
t
s
 
e
d
i
t
i
n
g
 
t
h
e
 
s
a
m
e
 
k
e
y
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


 
 
 
 
 
 
 
 
C
l
i
e
n
t
 
A
 
a
n
d
 
c
l
i
e
n
t
 
B
 
b
o
t
h
 
w
r
i
t
e
 
a
 
s
e
t
t
i
n
g
 
o
n
 
d
i
f
f
e
r
e
n
t
 
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
h
e
 
v
e
c
t
o
r
 
c
l
o
c
k
s
 
t
i
c
k


 
 
 
 
 
 
 
 
a
s
 
e
a
c
h
 
e
v
e
n
t
 
h
a
p
p
e
n
s
.
 
S
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
 
a
n
d
 
w
a
t
c
h
 
t
h
e
 
c
l
o
c
k
s
 
e
v
o
l
v
e
.
 
T
h
e
 
t
h
i
r
d
 
e
v
e
n
t
 
i
s
 
t
h
e


 
 
 
 
 
 
 
 
s
y
n
c
 
—
 
t
h
e
 
s
y
s
t
e
m
 
m
u
s
t
 
d
e
c
i
d
e
 
i
f
 
t
h
e
r
e
&
r
s
q
u
o
;
s
 
a
 
c
o
n
f
l
i
c
t
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
5
 
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
c
o
n
c
u
r
r
e
n
t
"
,
 
"
s
e
q
u
e
n
t
i
a
l
"
]
 
a
s
 
S
c
e
n
a
r
i
o
[
]
)
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
 
a
c
t
i
v
e
 
=
 
s
c
e
n
a
r
i
o
 
=
=
=
 
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
s
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
 
s
e
t
S
c
e
n
a
r
i
o
(
s
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
0
)
;
 
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
o
r
d
e
r
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
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
 
=
=
=
 
"
c
o
n
c
u
r
r
e
n
t
"
 
?
 
"
C
o
n
c
u
r
r
e
n
t
 
e
d
i
t
s
"
 
:
 
"
S
e
q
u
e
n
t
i
a
l
 
e
d
i
t
s
"
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
 
T
w
o
 
t
i
m
e
l
i
n
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


 
 
 
 
 
 
 
 
 
 
{
(
[
"
A
"
,
 
"
B
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
w
h
o
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
l
o
r
 
=
 
w
h
o
 
=
=
=
 
"
A
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
y
E
v
e
n
t
s
 
=
 
e
v
e
n
t
s
.
s
l
i
c
e
(
0
,
 
s
t
e
p
 
+
 
1
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
e
)
 
=
>
 
e
.
w
h
o
 
=
=
=
 
w
h
o
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
 
k
e
y
=
{
w
h
o
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
 
8
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
2
 
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
2
,
 
h
e
i
g
h
t
:
 
3
2
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
c
o
l
o
r
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
}
`
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
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
w
-
4
 
h
-
4
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
l
i
e
n
t
 
{
w
h
o
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
 
p
a
d
d
i
n
g
L
e
f
t
:
 
1
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
 
0
,
 
b
o
t
t
o
m
:
 
0
,
 
l
e
f
t
:
 
4
,
 
w
i
d
t
h
:
 
2
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
c
o
l
o
r
}
3
3
`
 
}
}
 
/
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
m
y
E
v
e
n
t
s
.
m
a
p
(
(
e
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
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
x
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
2
 
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
 
l
e
f
t
:
 
-
1
6
,
 
t
o
p
:
 
8
,
 
w
i
d
t
h
:
 
1
0
,
 
h
e
i
g
h
t
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
,
 
b
o
r
d
e
r
:
 
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
0
b
1
2
2
0
"
 
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
2
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
c
o
l
o
r
}
3
3
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
7
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
B
o
t
t
o
m
:
 
4
 
}
}
>
{
e
.
c
m
d
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
V
e
c
t
o
r
C
l
o
c
k
B
a
d
g
e
 
v
=
{
e
.
v
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
 
S
t
e
p
 
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


 
 
 
 
 
 
 
 
 
 
{
e
v
e
n
t
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
 
i
 
=
=
=
 
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
 
d
o
n
e
 
=
 
i
 
<
 
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
S
t
e
p
(
i
)
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
5
p
x
 
1
0
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
 
d
o
n
e
 
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
2
2
`
 
:
 
d
o
n
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
 
d
o
n
e
 
?
 
S
D
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
e
p
 
{
S
t
r
i
n
g
(
i
 
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
l
e
x
:
 
1
 
}
}
 
/
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
i
n
(
e
v
e
n
t
s
.
l
e
n
g
t
h
 
-
 
1
,
 
s
 
+
 
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
 
>
=
 
e
v
e
n
t
s
.
l
e
n
g
t
h
 
-
 
1
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
6
p
x
 
1
2
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
 
s
t
e
p
 
>
=
 
e
v
e
n
t
s
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
s
t
e
p
 
>
=
 
e
v
e
n
t
s
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
 
S
D
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
 
s
t
e
p
 
>
=
 
e
v
e
n
t
s
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
S
D
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
 
s
t
e
p
 
>
=
 
e
v
e
n
t
s
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
 
N
E
U
T
R
A
L
 
:
 
S
D
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


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
n
e
x
t
 
→


 
 
 
 
 
 
 
 
 
 
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
6
p
x
 
1
0
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
 
"
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
 
7
0
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


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
c
l
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
 
V
e
r
d
i
c
t
 
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
l
a
s
t
 
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
{
`
$
{
s
c
e
n
a
r
i
o
}
-
$
{
s
t
e
p
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
 
i
s
C
o
n
c
u
r
r
e
n
t
 
?
 
`
$
{
W
A
R
N
}
1
4
`
 
:
 
`
$
{
S
D
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
i
s
C
o
n
c
u
r
r
e
n
t
 
?
 
W
A
R
N
 
:
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
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
f
l
e
x
-
s
t
a
r
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
M
e
r
g
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
 
i
s
C
o
n
c
u
r
r
e
n
t
 
?
 
W
A
R
N
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
i
s
C
o
n
c
u
r
r
e
n
t
 
?
 
W
A
R
N
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
n
c
u
r
r
e
n
t
 
?
 
"
C
O
N
F
L
I
C
T
 
·
 
C
O
N
C
U
R
R
E
N
T
"
 
:
 
"
C
L
E
A
N
 
·
 
H
A
P
P
E
N
S
-
B
E
F
O
R
E
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
n
c
u
r
r
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
C
o
m
p
a
r
e
 
A
'
s
 
c
l
o
c
k
 
{
A
:
1
,
 
B
:
0
}
 
w
i
t
h
 
B
'
s
 
{
A
:
0
,
 
B
:
1
}
.
 
N
e
i
t
h
e
r
 
d
o
m
i
n
a
t
e
s
 
—
 
b
o
t
h
 
h
a
v
e
 
a
 
s
l
o
t
 
t
h
e
 
o
t
h
e
r
 
d
o
e
s
n
'
t
.
 
T
h
e
 
s
y
s
t
e
m
 
m
u
s
t
 
s
u
r
f
a
c
e
 
b
o
t
h
 
v
e
r
s
i
o
n
s
 
f
o
r
 
r
e
s
o
l
u
t
i
o
n
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
B
'
s
 
c
l
o
c
k
 
{
A
:
1
,
 
B
:
1
}
 
d
o
m
i
n
a
t
e
s
 
A
'
s
 
e
a
r
l
i
e
r
 
{
A
:
1
,
 
B
:
0
}
.
 
B
 
s
a
w
 
A
'
s
 
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
 
m
a
k
i
n
g
 
i
t
s
 
o
w
n
.
 
S
t
a
n
d
a
r
d
 
s
e
q
u
e
n
t
i
a
l
 
r
e
s
o
l
u
t
i
o
n
:
 
t
a
k
e
 
B
'
s
 
v
a
l
u
e
.
"
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
 
V
e
c
t
o
r
C
l
o
c
k
B
a
d
g
e
(
{
 
v
 
}
:
 
{
 
v
:
 
{
 
A
:
 
n
u
m
b
e
r
;
 
B
:
 
n
u
m
b
e
r
 
}
 
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
 
g
a
p
:
 
4
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
r
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
2
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
A
:
{
v
.
A
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
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
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
 
P
U
R
P
L
E
 
}
}
>
B
:
{
v
.
B
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
 
3
 
-
 
R
e
s
o
l
u
t
i
o
n
 
s
t
r
a
t
e
g
i
e
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
 
S
T
R
A
T
E
G
I
E
S
 
=
 
[


 
 
{


 
 
 
 
n
a
m
e
:
 
"
L
a
s
t
 
W
r
i
t
e
 
W
i
n
s
 
(
L
W
W
)
"
,


 
 
 
 
h
o
w
:
 
"
P
i
c
k
 
t
h
e
 
w
r
i
t
e
 
w
i
t
h
 
t
h
e
 
l
a
r
g
e
r
 
t
i
m
e
s
t
a
m
p
.
 
D
r
o
p
 
t
h
e
 
o
t
h
e
r
.
"
,


 
 
 
 
p
r
o
:
 
"
S
i
m
p
l
e
.
 
Z
e
r
o
 
d
e
v
e
l
o
p
e
r
 
e
f
f
o
r
t
.
 
I
d
e
m
p
o
t
e
n
t
.
"
,


 
 
 
 
c
o
n
:
 
"
S
i
l
e
n
t
l
y
 
l
o
s
e
s
 
d
a
t
a
.
 
C
l
o
c
k
 
s
k
e
w
 
m
a
k
e
s
 
'
l
a
s
t
'
 
u
n
r
e
l
i
a
b
l
e
.
"
,


 
 
 
 
e
x
:
 
"
C
a
s
s
a
n
d
r
a
 
d
e
f
a
u
l
t
.
 
G
o
o
d
 
f
o
r
 
c
a
c
h
e
 
i
n
v
a
l
i
d
a
t
i
o
n
,
 
l
a
s
t
-
s
e
e
n
-
o
n
l
i
n
e
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
A
p
p
l
i
c
a
t
i
o
n
 
m
e
r
g
e
"
,


 
 
 
 
h
o
w
:
 
"
S
u
r
f
a
c
e
 
b
o
t
h
 
v
e
r
s
i
o
n
s
 
t
o
 
t
h
e
 
a
p
p
.
 
L
e
t
 
i
t
 
m
e
r
g
e
 
f
i
e
l
d
-
b
y
-
f
i
e
l
d
.
"
,


 
 
 
 
p
r
o
:
 
"
P
r
e
s
e
r
v
e
s
 
a
l
l
 
c
h
a
n
g
e
s
.
 
C
a
p
t
u
r
e
s
 
b
u
s
i
n
e
s
s
 
r
u
l
e
s
.
"
,


 
 
 
 
c
o
n
:
 
"
F
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
a
d
 
p
a
t
h
 
t
o
 
h
a
n
d
l
e
 
s
i
b
l
i
n
g
s
.
"
,


 
 
 
 
e
x
:
 
"
R
i
a
k
 
s
i
b
l
i
n
g
s
.
 
S
h
o
p
p
i
n
g
 
c
a
r
t
 
m
e
r
g
i
n
g
 
i
t
e
m
s
 
f
r
o
m
 
t
w
o
 
d
e
v
i
c
e
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
C
R
D
T
s
"
,


 
 
 
 
h
o
w
:
 
"
U
s
e
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
s
 
(
G
-
C
o
u
n
t
e
r
,
 
O
R
-
S
e
t
,
 
R
G
A
)
 
w
h
e
r
e
 
m
e
r
g
e
s
 
a
r
e
 
m
a
t
h
e
m
a
t
i
c
a
l
l
y
 
c
o
m
m
u
t
a
t
i
v
e
.
"
,


 
 
 
 
p
r
o
:
 
"
P
r
o
v
a
b
l
y
 
c
o
n
v
e
r
g
e
s
.
 
N
o
 
a
p
p
-
l
e
v
e
l
 
m
e
r
g
e
 
c
o
d
e
 
n
e
e
d
e
d
.
"
,


 
 
 
 
c
o
n
:
 
"
L
i
m
i
t
e
d
 
t
o
 
t
y
p
e
s
 
y
o
u
 
c
a
n
 
m
o
d
e
l
 
a
s
 
C
R
D
T
s
.
"
,


 
 
 
 
e
x
:
 
"
R
e
d
i
s
 
C
R
D
T
,
 
Y
j
s
/
A
u
t
o
m
e
r
g
e
 
f
o
r
 
c
o
l
l
a
b
o
r
a
t
i
v
e
 
e
d
i
t
i
n
g
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
S
t
r
o
n
g
 
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
 
(
a
v
o
i
d
)
"
,


 
 
 
 
h
o
w
:
 
"
U
s
e
 
R
a
f
t
/
P
a
x
o
s
 
s
o
 
w
r
i
t
e
s
 
s
e
r
i
a
l
i
z
e
 
t
h
r
o
u
g
h
 
o
n
e
 
l
e
a
d
e
r
.
 
C
o
n
f
l
i
c
t
s
 
c
a
n
'
t
 
h
a
p
p
e
n
.
"
,


 
 
 
 
p
r
o
:
 
"
C
o
n
c
e
p
t
u
a
l
l
y
 
s
i
m
p
l
e
s
t
.
"
,


 
 
 
 
c
o
n
:
 
"
L
o
s
e
s
 
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
 
u
n
d
e
r
 
p
a
r
t
i
t
i
o
n
.
 
H
i
g
h
e
r
 
l
a
t
e
n
c
y
.
"
,


 
 
 
 
e
x
:
 
"
S
p
a
n
n
e
r
,
 
e
t
c
d
,
 
M
o
n
g
o
D
B
 
p
r
i
m
a
r
y
 
w
r
i
t
e
s
.
"
,


 
 
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
 
S
t
r
a
t
e
g
i
e
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
W
h
a
t
 
t
o
 
d
o
 
w
h
e
n
 
t
h
e
 
c
l
o
c
k
s
 
s
a
y
 
&
l
d
q
u
o
;
c
o
n
c
u
r
r
e
n
t
&
r
d
q
u
o
;
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


 
 
 
 
 
 
 
 
O
n
c
e
 
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
v
e
 
d
e
t
e
c
t
e
d
 
a
 
c
o
n
f
l
i
c
t
,
 
y
o
u
 
h
a
v
e
 
t
o
 
p
i
c
k
 
h
o
w
 
t
o
 
r
e
s
o
l
v
e
 
i
t
.
 
E
a
c
h
 
s
t
r
a
t
e
g
y
 
i
s


 
 
 
 
 
 
 
 
a
 
r
e
a
l
 
t
r
a
d
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
S
T
R
A
T
E
G
I
E
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
 
8
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
s
.
n
a
m
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
s
.
h
o
w
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
 
1
2
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
 
1
0
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
S
D
}
3
3
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
R
O


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
 
}
}
>
{
s
.
p
r
o
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
 
1
0
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
W
A
R
N
}
1
0
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
W
A
R
N
}
3
3
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
 
W
A
R
N
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
O
N


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
 
}
}
>
{
s
.
c
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
T
o
p
:
 
8
,
 
b
o
r
d
e
r
T
o
p
:
 
"
1
p
x
 
d
a
s
h
e
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
0
8
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
R
i
g
h
t
:
 
4
 
}
}
>
E
X
 
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
s
.
e
x
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
V
e
c
t
o
r
C
l
o
c
k
s
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
c
o
n
c
u
r
r
e
n
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
C
o
n
c
u
r
r
e
n
t
 
E
d
i
t
"
,
 
i
c
o
n
:
 
<
C
l
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
C
o
n
c
u
r
r
e
n
t
E
d
i
t
 
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
s
o
l
v
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
R
e
s
o
l
u
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
G
i
t
M
e
r
g
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
S
t
r
a
t
e
g
i
e
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
T
w
o
 
w
r
i
t
e
s
 
h
a
v
e
 
v
e
c
t
o
r
 
c
l
o
c
k
s
 
A
=
{
x
:
2
,
 
y
:
1
}
 
a
n
d
 
B
=
{
x
:
1
,
 
y
:
2
}
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
e
l
a
t
i
o
n
s
h
i
p
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
A
 
h
a
p
p
e
n
s
-
b
e
f
o
r
e
 
B
"
,
 
"
B
 
h
a
p
p
e
n
s
-
b
e
f
o
r
e
 
A
"
,
 
"
C
o
n
c
u
r
r
e
n
t
 
(
c
o
n
f
l
i
c
t
)
"
,
 
"
I
d
e
n
t
i
c
a
l
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
A
 
h
a
s
 
a
 
h
i
g
h
e
r
 
x
 
b
u
t
 
l
o
w
e
r
 
y
;
 
B
 
h
a
s
 
h
i
g
h
e
r
 
y
 
b
u
t
 
l
o
w
e
r
 
x
.
 
N
e
i
t
h
e
r
 
d
o
m
i
n
a
t
e
s
 
—
 
t
h
e
y
'
r
e
 
c
o
n
c
u
r
r
e
n
t
.
 
T
h
e
 
s
y
s
t
e
m
 
m
u
s
t
 
s
u
r
f
a
c
e
 
b
o
t
h
 
v
e
r
s
i
o
n
s
 
o
r
 
p
i
c
k
 
a
 
r
e
s
o
l
u
t
i
o
n
 
p
o
l
i
c
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
W
h
y
 
a
r
e
 
v
e
c
t
o
r
 
c
l
o
c
k
s
 
p
r
e
f
e
r
r
e
d
 
o
v
e
r
 
w
a
l
l
-
c
l
o
c
k
 
t
i
m
e
s
t
a
m
p
s
 
f
o
r
 
c
o
n
f
l
i
c
t
 
d
e
t
e
c
t
i
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
T
h
e
y
'
r
e
 
s
m
a
l
l
e
r
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
d
o
n
'
t
 
d
e
p
e
n
d
 
o
n
 
s
y
n
c
h
r
o
n
i
z
e
d
 
p
h
y
s
i
c
a
l
 
c
l
o
c
k
s
,
 
w
h
i
c
h
 
d
r
i
f
t
 
a
n
d
 
c
a
n
 
r
u
n
 
b
a
c
k
w
a
r
d
s
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
s
u
p
p
o
r
t
 
m
o
r
e
 
n
o
d
e
s
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
'
r
e
 
a
n
 
S
Q
L
 
s
t
a
n
d
a
r
d
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
W
a
l
l
 
c
l
o
c
k
s
 
a
c
r
o
s
s
 
s
e
r
v
e
r
s
 
c
a
n
 
d
i
s
a
g
r
e
e
 
b
y
 
m
i
l
l
i
s
e
c
o
n
d
s
 
o
r
 
j
u
m
p
 
b
a
c
k
w
a
r
d
 
(
N
T
P
 
s
y
n
c
,
 
l
e
a
p
 
s
e
c
o
n
d
s
)
.
 
V
e
c
t
o
r
 
c
l
o
c
k
s
 
a
r
e
 
p
u
r
e
l
y
 
l
o
g
i
c
a
l
 
a
n
d
 
o
n
l
y
 
a
d
v
a
n
c
e
 
o
n
 
o
b
s
e
r
v
e
d
 
e
v
e
n
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
W
h
i
c
h
 
r
e
s
o
l
u
t
i
o
n
 
s
t
r
a
t
e
g
y
 
s
i
l
e
n
t
l
y
 
l
o
s
e
s
 
d
a
t
a
 
w
h
e
n
 
u
s
e
d
 
n
a
i
v
e
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
C
R
D
T
s
"
,
 
"
L
a
s
t
-
W
r
i
t
e
-
W
i
n
s
"
,
 
"
A
p
p
l
i
c
a
t
i
o
n
 
m
e
r
g
e
"
,
 
"
S
t
r
o
n
g
 
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
L
W
W
 
j
u
s
t
 
p
i
c
k
s
 
t
h
e
 
'
l
a
r
g
e
r
'
 
t
i
m
e
s
t
a
m
p
 
a
n
d
 
d
i
s
c
a
r
d
s
 
t
h
e
 
o
t
h
e
r
 
w
r
i
t
e
.
 
I
f
 
b
o
t
h
 
w
r
i
t
e
s
 
m
e
a
n
t
 
s
o
m
e
t
h
i
n
g
 
d
i
f
f
e
r
e
n
t
 
(
A
l
i
c
e
 
a
d
d
e
d
 
a
 
c
o
u
p
o
n
,
 
B
o
b
 
a
d
d
e
d
 
a
 
d
i
f
f
e
r
e
n
t
 
c
o
u
p
o
n
)
,
 
o
n
e
 
i
s
 
l
o
s
t
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
 
s
h
o
p
p
i
n
g
 
c
a
r
t
s
 
u
s
e
 
s
i
b
l
i
n
g
 
m
e
r
g
e
 
i
n
s
t
e
a
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
R
e
a
l
-
t
i
m
e
 
c
o
l
l
a
b
o
r
a
t
i
v
e
 
t
o
o
l
s
 
l
i
k
e
 
F
i
g
m
a
 
a
n
d
 
G
o
o
g
l
e
 
D
o
c
s
 
a
v
o
i
d
 
s
u
r
f
a
c
i
n
g
 
c
o
n
f
l
i
c
t
s
 
t
o
 
t
h
e
 
u
s
e
r
.
 
H
o
w
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
y
 
u
s
e
 
a
 
s
i
n
g
l
e
 
g
l
o
b
a
l
 
d
a
t
a
b
a
s
e
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
u
s
e
 
C
R
D
T
s
 
(
o
r
 
o
p
e
r
a
t
i
o
n
-
t
r
a
n
s
f
o
r
m
 
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
)
 
s
o
 
c
o
n
c
u
r
r
e
n
t
 
e
d
i
t
s
 
m
e
r
g
e
 
a
u
t
o
m
a
t
i
c
a
l
l
y
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
l
o
c
k
 
t
h
e
 
d
o
c
u
m
e
n
t
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
r
e
j
e
c
t
 
t
h
e
 
s
e
c
o
n
d
 
w
r
i
t
e
r
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
C
R
D
T
s
 
a
n
d
 
O
T
 
b
o
t
h
 
l
e
t
 
i
n
d
e
p
e
n
d
e
n
t
 
e
d
i
t
s
 
c
o
m
p
o
s
e
 
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
a
l
l
y
 
w
i
t
h
o
u
t
 
c
o
o
r
d
i
n
a
t
i
o
n
.
 
T
h
e
 
u
s
e
r
 
n
e
v
e
r
 
s
e
e
s
 
a
 
c
o
n
f
l
i
c
t
 
p
r
o
m
p
t
;
 
t
h
e
 
d
a
t
a
 
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
o
e
s
 
t
h
e
 
m
e
r
g
e
 
f
o
r
 
t
h
e
m
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
V
e
c
t
o
r
 
C
l
o
c
k
s
 
&
 
C
o
n
f
l
i
c
t
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
4
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
 
c
o
n
f
l
i
c
t
-
d
e
t
e
c
t
i
o
n
 
p
r
i
m
i
t
i
v
e
 
b
e
h
i
n
d
 
R
i
a
k
,
 
D
y
n
a
m
o
,
 
a
n
d
 
C
R
D
T
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


